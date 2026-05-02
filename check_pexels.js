async function test() {
  const res = await fetch('https://api.pexels.com/v1/search?query=beautiful+green+garden+landscape&per_page=5', {
    headers: { 'Authorization': '563492ad6f917000010000019b88e10057aa4b5a8327bfecc5eb4add' }
  });
  const data = await res.json();
  console.log(data.photos.map(p => p.src.large2x));
}
test();
