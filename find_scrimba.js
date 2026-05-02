import https from 'https';

https.get('https://apis.scrimba.com/unsplash/photos/random?query=green-garden', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      console.log(parsed.urls.raw);
    } catch(e) { console.error(e) }
  });
});
