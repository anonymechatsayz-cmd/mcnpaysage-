const urls = [
  "https://images.unsplash.com/photo-1620021319760-449e79435b0d",
  "https://images.unsplash.com/photo-1595822527376-7aa0168ebfc8",
  "https://images.unsplash.com/photo-1584622781564-1d987f7333c1",
  "https://images.unsplash.com/photo-1560250097001-c73266d9a951",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
  "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672",
  "https://images.unsplash.com/photo-1572085313466-6710de8d7ba3"
];

Promise.all(urls.map(url => fetch(url, {method: 'HEAD'}).then(r => console.log(r.status, url)).catch(e => console.error(e.message, url))));
