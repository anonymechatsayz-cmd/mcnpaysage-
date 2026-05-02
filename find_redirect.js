import https from 'https';
https.get('https://source.unsplash.com/1920x1080/?garden,lawn,green', (res) => {
  console.log('Redirect:', res.headers.location);
});
