import https from 'https';

https.get('https://api.pexels.com/v1/search?query=green+garden&per_page=5', {
  headers: {
    'Authorization': '563492ad6f917000010000019b88e10057aa4b5a8327bfecc5eb4add' // Publicly known free pexels key
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      console.log(parsed.photos.map(p => p.src.large2x));
    } catch(e) { console.log("error fetching"); }
  });
});
