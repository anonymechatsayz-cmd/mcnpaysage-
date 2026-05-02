const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const replacements = {
  // 404 map to 200
  '1558904541-efa843a96f0f': '1600585154340-be6161a56a0c',
  '1592424005663-8a306461ba16': '1523301343968-6a6ebf63c672',
  '1416879598555-257cf02e9bc2': '1605810230434-7631ac76ec81',
  '1558455243-7f22a7fdbcb9': '1572085313466-6710de8d7ba3',
  '1585320806297-9794b3e4ce88': '1503387762-592deb58ef4e',
  '1560250097001-c73266d9a951': '1542601906990-b4d3fb778b09',
  '1588628566587-bf1ee62fee30': '1584622781564-1d987f7333c1',
  '1595822527376-7aa0168ebfc8': '1542601906990-b4d3fb778b09',
  '1620021319760-449e79435b0d': '1600585154340-be6161a56a0c',
  // Make sure to not mess up valid ones!
};

for (const [bad, good] of Object.entries(replacements)) {
  html = html.split(bad).join(good);
}

// Ensure the green banner has proper styling to not scroll horizontally
// It has: flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-between gap-6 md:gap-12
// wait, let's fix the gap or wrap if needed. Actually it was already changed to wrap. Let's make sure it's perfect.
html = html.replace('max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative', 'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Images fixed');
