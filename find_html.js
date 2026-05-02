import https from 'https';

https.get('https://unsplash.com/s/photos/green-garden', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /photo-[a-zA-Z0-9-]+/g;
    const matches = data.match(regex) || [];
    console.log([...new Set(matches)].slice(0, 10));
  });
});
