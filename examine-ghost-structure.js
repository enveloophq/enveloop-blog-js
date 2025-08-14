#!/usr/bin/env node

import fs from 'node:fs'

// Read the Ghost backup file
const ghostData = JSON.parse(fs.readFileSync('enveloop-blog-ghost-backup.json', 'utf8'))

console.log('Ghost backup structure:')
console.log('- Database entries:', ghostData.db.length)

const data = ghostData.db[0].data
console.log('\nData sections:')
Object.keys(data).forEach((key) => {
  if (Array.isArray(data[key])) {
    console.log(`- ${key}: ${data[key].length} items`)
  }
  else {
    console.log(`- ${key}: ${typeof data[key]}`)
  }
})

console.log('\nFirst few posts:')
const posts = data.posts || []
posts.slice(0, 3).forEach((post, i) => {
  console.log(`\nPost ${i + 1}:`)
  console.log(`- ID: ${post.id}`)
  console.log(`- Title: ${post.title}`)
  console.log(`- Slug: ${post.slug}`)
  console.log(`- Status: ${post.status}`)
  console.log(`- Published: ${post.published_at}`)
  console.log(`- Has HTML: ${!!post.html}`)
  console.log(`- Has mobiledoc: ${!!post.mobiledoc}`)
  console.log(`- Feature image: ${post.feature_image || 'none'}`)
  console.log(`- Custom excerpt: ${post.custom_excerpt || 'none'}`)
})

console.log('\nTags:')
const tags = data.tags || []
tags.slice(0, 5).forEach((tag, i) => {
  console.log(`- ${tag.name} (${tag.slug})`)
})

console.log('\nPosts-Tags relationships:')
const postsTags = data.posts_tags || []
console.log(`- Total relationships: ${postsTags.length}`)
if (postsTags.length > 0) {

}
