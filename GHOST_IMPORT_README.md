# Ghost to Astro Import Script

This script converts your Ghost blog export into Astro-compatible markdown files.

## Usage

1. **Your Ghost export file** is already in place: `enveloop-blog-ghost-backup.json`

2. **Run the import script:**

   ```bash
   node import-ghost-posts.js
   ```

   Or with a custom file path:

   ```bash
   node import-ghost-posts.js path/to/your/ghost-export.json
   ```

## What it does

- ✅ Converts Ghost posts to Astro markdown format
- ✅ Preserves frontmatter (title, date, tags, description)
- ✅ Converts HTML content to Markdown
- ✅ Creates URL-friendly filenames
- ✅ Skips drafts (only imports published posts)
- ✅ Avoids overwriting existing files
- ✅ Handles images, links, headings, lists, and basic formatting

## Output

Posts will be created in `src/content/posts/` with this frontmatter structure:

```yaml
---
title: Your Post Title
published: 2022-11-18
tags:
  - Tag1
  - Tag2
description: Post description from Ghost
image: https://example.com/feature-image.jpg
toc: false
lang: en
abbrlink: your-post-slug
---
```

## After Import

1. **Review the posts** - The HTML to Markdown conversion is basic, so check formatting
2. **Update image paths** - If you have local images, update the paths to your assets folder
3. **Test your build** - Run `npm run build` to ensure everything works
4. **Customize frontmatter** - Adjust any fields to match your needs

## Troubleshooting

- **No posts found**: Check that your Ghost export contains posts in the expected format
- **File already exists**: The script skips existing files to avoid overwrites
- **Formatting issues**: The HTML conversion is basic - you may need to manually fix complex formatting

## Ghost Export Format

Make sure your Ghost export is a JSON file from Ghost Admin → Settings → Labs → Export content.
