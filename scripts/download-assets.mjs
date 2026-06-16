import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const BASE = 'https://cluely.com';
const OUT = '/Users/sanju/websites/clone_website/clone_site/public';

const assets = [
  // Hero background
  ['/images/pages/home/background.png', 'images/pages/home/background.png'],
  ['/images/pages/home/background@2x.png', 'images/pages/home/background@2x.png'],
  // Wordmarks
  ['/wordmark-light.svg', 'images/wordmark-light.svg'],
  ['/wordmark.svg', 'images/wordmark.svg'],
  // Mac dock icons
  ['/images/pages/home/launchpad-icon.png', 'images/pages/home/launchpad-icon.png'],
  ['/images/pages/home/safari-icon.png', 'images/pages/home/safari-icon.png'],
  ['/images/pages/home/settings-icon.png', 'images/pages/home/settings-icon.png'],
  ['/images/pages/home/zoom-icon.png', 'images/pages/home/zoom-icon.png'],
  ['/images/pages/home/cluely-icon.png', 'images/pages/home/cluely-icon.png'],
  ['/images/pages/home/trash-icon.png', 'images/pages/home/trash-icon.png'],
  // Static media
  ['/_next/static/media/shimmer.aeaeb2f7.png', 'images/shimmer.png'],
  ['/_next/static/media/wallpaper@2x.b7df867c.png', 'images/wallpaper@2x.png'],
  ['/_next/static/media/mobile-notes.5dc13f8d.png', 'images/mobile-notes.png'],
  ['/_next/static/media/tablet-notes.5560bad7.png', 'images/tablet-notes.png'],
  ['/_next/static/media/desktop-notes-2.8614c68b.png', 'images/desktop-notes.png'],
  // Avatar images
  ['/_next/static/media/gina-huels.b14409cf.png', 'images/gina-huels.png'],
  ['/_next/static/media/todd-cremin.9cbbdf9c.png', 'images/todd-cremin.png'],
  ['/_next/static/media/holly-gleason.528905fb.png', 'images/holly-gleason.png'],
  ['/_next/static/media/tomas-hansen.5f58da3e.png', 'images/tomas-hansen.png'],
  // SVG icons
  ['/_next/static/media/cluely.7e226633.svg', 'images/cluely-icon.svg'],
  ['/_next/static/media/eye.79b67e64.svg', 'images/eye.svg'],
  // Undetectability cards
  ['/_next/static/media/invisible-tool.452f4abe.png', 'images/invisible-tool.png'],
  ['/_next/static/media/bg-purple.449cf71b.jpg', 'images/bg-purple.jpg'],
  ['/_next/static/media/file-browser-card.8990f1d2.png', 'images/file-browser-card.png'],
  ['/_next/static/media/bg-pink.1696fade.jpg', 'images/bg-pink.jpg'],
  ['/_next/static/media/messaging-card.f1bfaf57.png', 'images/messaging-card.png'],
  ['/_next/static/media/bg-purple-dark.58e0b5e1.jpg', 'images/bg-purple-dark.jpg'],
  ['/_next/static/media/video-conference-card.26ec85da.png', 'images/video-conference-card.png'],
  ['/_next/static/media/bg-blue.825b2efd.jpg', 'images/bg-blue.jpg'],
  ['/_next/static/media/video-player-card.9b7a7f86.png', 'images/video-player-card.png'],
  // Tool logos
  ['/_next/static/media/zoom.398e9568.png', 'images/tools/zoom.png'],
  ['/_next/static/media/slack.0e754017.png', 'images/tools/slack.png'],
  ['/_next/static/media/webex.6e65e4a4.png', 'images/tools/webex.png'],
  ['/_next/static/media/teams.845b90a5.png', 'images/tools/teams.png'],
  ['/_next/static/media/meet.7640c976.png', 'images/tools/meet.png'],
  // Transcript
  ['/_next/static/media/transcript-tab.1c48d5b2.png', 'images/transcript-tab.png'],
  // CTA keyboard images
  ['/_next/static/media/apple.9854bb2c.svg', 'images/apple.svg'],
  ['/_next/static/media/command-btn.05a11379.png', 'images/command-btn.png'],
  ['/_next/static/media/command-active.83241958.png', 'images/command-active.png'],
  ['/_next/static/media/return-active.30ff0cd8.png', 'images/return-active.png'],
  ['/_next/static/media/return-btn.f7f71a9d.png', 'images/return-btn.png'],
];

async function download(src, dest) {
  const url = src.startsWith('http') ? src : BASE + src;
  const outPath = join(OUT, dest);
  mkdirSync(dirname(outPath), { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) { console.error(`FAIL ${url}: ${res.status}`); return; }
    const buf = await res.arrayBuffer();
    writeFileSync(outPath, Buffer.from(buf));
    console.log(`OK  ${dest}`);
  } catch (e) {
    console.error(`ERR ${url}: ${e.message}`);
  }
}

// Download 4 at a time
for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(assets.slice(i, i + 4).map(([src, dest]) => download(src, dest)));
}
console.log('Done!');
