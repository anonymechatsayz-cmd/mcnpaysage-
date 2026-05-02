import https from 'https';

const ids = [
  "1558904541-efa843a96f0f",
  "1416879598555-257cf02e9bc2",
  "1585320806297-9794b3e4ce88",
  "1558455243-7f22a7fdbcb9",
  "1470058869958-2a77ade41c02",
  "1625244724120-1fd1d34d00f6",
  "1585320806297-9794b3e4ce88",
  "1550184658-ff6132a71714",
  "1416879598555-257cf02e9bc2"
];

ids.forEach(id => {
  const url = `https://images.unsplash.com/photo-${id}`;
  fetch(url, {method: 'HEAD'})
    .then(r => console.log(r.status, id))
    .catch(e => console.error(e.message, id));
});
