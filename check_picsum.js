async function test() {
  const res = await fetch('https://picsum.photos/v2/list?limit=100');
  const data = await res.json();
  const sorted = data.sort(() => 0.5 - Math.random()).slice(0, 5);
  console.log(sorted.map(s => s.download_url));
}
test();
