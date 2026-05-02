import https from 'https';

https.get('https://unsplash.com/napi/search/photos?query=lush+green+garden&per_page=5', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      console.log(parsed.results.map(p => p.id));
    } catch(e) { console.error("Error parsing JSON") }
  });
});
