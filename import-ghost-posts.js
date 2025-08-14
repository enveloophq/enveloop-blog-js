#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Configuration
const GHOST_JSON_FILE = process.argv[2] || 'enveloop-blog-ghost-backup.json';
const OUTPUT_DIR = './src/content/posts';

// Helper function to create a URL-friendly slug
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim('-'); // Remove leading/trailing hyphens
}

// Helper function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0]; // YYYY-MM-DD format
}

// Helper function to convert Ghost HTML to Markdown (enhanced for Ghost content)
function htmlToMarkdown(html) {
  if (!html) return '';
  
  return html
    // Handle Ghost-specific image cards with captions
    .replace(/<figure class="kg-card kg-image-card kg-card-hascaption">\s*<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>\s*<figcaption[^>]*>(.*?)<\/figcaption>\s*<\/figure>/gis, '![$2]($1)\n*$3*\n')
    .replace(/<figure class="kg-card kg-image-card">\s*<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>\s*<\/figure>/gis, '![$2]($1)')
    .replace(/<figure class="kg-card kg-image-card kg-card-hascaption">\s*<img[^>]*src="([^"]*)"[^>]*>\s*<figcaption[^>]*>(.*?)<\/figcaption>\s*<\/figure>/gis, '![]($1)\n*$2*\n')
    .replace(/<figure class="kg-card kg-image-card">\s*<img[^>]*src="([^"]*)"[^>]*>\s*<\/figure>/gis, '![]($1)')
    
    // Convert headings
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1')
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1')
    .replace(/<h5[^>]*>(.*?)<\/h5>/gi, '##### $1')
    .replace(/<h6[^>]*>(.*?)<\/h6>/gi, '###### $1')
    
    // Convert paragraphs
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
    
    // Convert links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    
    // Convert bold and italic
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
    
    // Convert lists
    .replace(/<ul[^>]*>(.*?)<\/ul>/gis, (match, content) => {
      return content.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1') + '\n';
    })
    .replace(/<ol[^>]*>(.*?)<\/ol>/gis, (match, content) => {
      let counter = 1;
      return content.replace(/<li[^>]*>(.*?)<\/li>/gi, () => `${counter++}. $1`) + '\n';
    })
    
    // Convert remaining images
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, '![$2]($1)')
    .replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, '![]($1)')
    
    // Convert blockquotes
    .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gis, (match, content) => {
      return content.split('\n').map(line => `> ${line.trim()}`).join('\n') + '\n';
    })
    
    // Convert code blocks
    .replace(/<pre[^>]*><code[^>]*>(.*?)<\/code><\/pre>/gis, '```\n$1\n```\n')
    .replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
    
    // Convert line breaks
    .replace(/<br\s*\/?>/gi, '\n')
    
    // Remove remaining HTML tags
    .replace(/<[^>]*>/g, '')
    
    // Fix Ghost URL placeholders (you may want to replace with your actual domain)
    .replace(/__GHOST_URL__/g, 'https://blog.enveloop.com')
    
    // Clean up extra whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();
}

// Main import function
async function importGhostPosts() {
  try {
    // Check if Ghost JSON file exists
    if (!fs.existsSync(GHOST_JSON_FILE)) {
      console.error(`❌ Ghost export file not found: ${GHOST_JSON_FILE}`);
      console.log('Usage: node import-ghost-posts.js [path-to-ghost-export.json]');
      process.exit(1);
    }

    // Read and parse Ghost export
    console.log(`📖 Reading Ghost export from: ${GHOST_JSON_FILE}`);
    const ghostData = JSON.parse(fs.readFileSync(GHOST_JSON_FILE, 'utf8'));
    
    // Extract data from Ghost backup structure
    const data = ghostData.db[0].data;
    const posts = data.posts || [];
    const tags = data.tags || [];
    const postsTags = data.posts_tags || [];
    
    if (posts.length === 0) {
      console.log('⚠️  No posts found in Ghost export');
      return;
    }

    console.log(`📝 Found ${posts.length} posts to import`);

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    let imported = 0;
    let skipped = 0;

    // Process each post
    for (const post of posts) {
      // Skip drafts unless you want them (change this to include drafts if needed)
      if (post.status !== 'published') {
        console.log(`⏭️  Skipping ${post.status}: ${post.title}`);
        skipped++;
        continue;
      }

      // Create filename
      const slug = post.slug || createSlug(post.title);
      const filename = `${slug}.md`;
      const filepath = path.join(OUTPUT_DIR, filename);

      // Check if file already exists
      if (fs.existsSync(filepath)) {
        console.log(`⚠️  File already exists, skipping: ${filename}`);
        skipped++;
        continue;
      }

      // Extract tags for this post
      const postTagIds = postsTags
        .filter(pt => pt.post_id === post.id)
        .map(pt => pt.tag_id);
      
      const postTags = tags
        .filter(tag => postTagIds.includes(tag.id))
        .map(tag => tag.name);

      // Create frontmatter
      const frontmatter = {
        title: post.title,
        published: formatDate(post.published_at || post.created_at),
        ...(postTags.length > 0 && { tags: postTags }),
        ...(post.custom_excerpt && { description: post.custom_excerpt }),
        ...(post.feature_image && { image: post.feature_image.replace('__GHOST_URL__', 'https://blog.enveloop.com') }),
        toc: false,
        lang: 'en',
        abbrlink: slug
      };

      // Convert content (prefer HTML over mobiledoc)
      const content = htmlToMarkdown(post.html || '');

      // Create markdown file content
      const markdownContent = `---
${Object.entries(frontmatter)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key}:\n${value.map(v => `  - ${v}`).join('\n')}`;
    }
    return `${key}: ${typeof value === 'string' ? value : JSON.stringify(value)}`;
  })
  .join('\n')}
---

${content}
`;

      // Write file
      fs.writeFileSync(filepath, markdownContent, 'utf8');
      console.log(`✅ Imported: ${filename}`);
      imported++;
    }

    console.log(`\n🎉 Import complete!`);
    console.log(`   Imported: ${imported} posts`);
    console.log(`   Skipped: ${skipped} posts`);
    
    if (imported > 0) {
      console.log(`\n📁 Posts saved to: ${OUTPUT_DIR}`);
      console.log(`\n💡 Next steps:`);
      console.log(`   1. Review the imported posts for formatting`);
      console.log(`   2. Update any image paths if needed`);
      console.log(`   3. Test your Astro build: npm run build`);
    }

  } catch (error) {
    console.error('❌ Error importing posts:', error.message);
    process.exit(1);
  }
}

// Run the import
importGhostPosts();