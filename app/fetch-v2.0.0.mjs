import fs from 'fs';
import https from 'https';
import TurndownService from 'turndown';

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks).toString()));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  // First batch (posts 1-20)
  const raw1 = await fetch('https://aurora4x.com/t/aurora-v2-0-0-patch-notes-august-6th-2022/28.json');
  const data1 = JSON.parse(raw1);
  const allPosts = [...data1.post_stream.posts];
  console.log('Batch 1:', allPosts.length, 'posts');

  // Second batch - /28/29.json for remaining posts
  const raw2 = await fetch('https://aurora4x.com/t/aurora-v2-0-0-patch-notes-august-6th-2022/28/29.json');
  const data2 = JSON.parse(raw2);
  allPosts.push(...data2.post_stream.posts.filter(p => !allPosts.find(a => a.id === p.id)));
  console.log('After batch 2:', allPosts.length, 'posts');

  // Sort by post_number
  allPosts.sort((a, b) => a.post_number - b.post_number);
  console.log('Total posts:', allPosts.length);

  // Convert with turndown
  const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
  let allMd = '';

  for (const post of allPosts) {
    if (!post.cooked || post.cooked.trim() === '') continue;
    let md = td.turndown(post.cooked);

    // Fix broken linked images
    md = md.replace(
      /\[!\[image\]\(([^)]+)\)[\s\S]*?\]\(([^)]+?)(?:\s+"image")?\)/g,
      (_, thumb, full) => '![image](' + full + ')'
    );

    // Fix image metadata lines
    md = md.replace(/^image\d+×\d+\s+[\d.]+ [KMG]B$/gm, '');

    // Clean up empty lines
    md = md.replace(/\n{4,}/g, '\n\n\n');

    allMd += md.trim() + '\n\n';
  }

  fs.mkdirSync('public/docs/v2.0.0', { recursive: true });
  fs.writeFileSync('public/docs/v2.0.0/raw-combined.md', allMd);
  console.log('Written', allMd.length, 'chars to raw-combined.md');

  // Print all post titles for mapping
  allPosts.forEach(p => {
    const preview = (p.cooked || '').substring(0, 80).replace(/\n/g, ' ');
    console.log(`Post ${p.post_number}: ${preview}`);
  });
}
main().catch(console.error);
