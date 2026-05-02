import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf8');
const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/g;
const urls = [...new Set(html.match(regex))];

Promise.all(urls.map(url => fetch(url, {method: 'HEAD'}).then(r => {
  if (r.status !== 200) console.log(r.status, url);
}).catch(e => console.error(e.message, url))));
