import https from 'https';
https.get('https://unsplash.com/s/photos/beautiful-garden', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const regex = /images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/g;
    const matches = data.match(regex) || [];
    console.log([...new Set(matches)].slice(0, 10));
  });
});
