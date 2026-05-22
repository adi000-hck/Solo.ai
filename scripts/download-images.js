const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = {
  'hero.jpg': 'https://picsum.photos/seed/ai/800/400',
  'resume.jpg': 'https://picsum.photos/seed/resume/600/400',
  'chatbot.jpg': 'https://picsum.photos/seed/chatbot/600/400',
  'content.jpg': 'https://picsum.photos/seed/content/600/400',
  'study.jpg': 'https://picsum.photos/seed/study/600/400',
  'saas.jpg': 'https://picsum.photos/seed/dashboard/600/400'
};

const headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' };

function download(name, url) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading ${name} from ${url}`);
    https.get(url, { headers }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, { headers }, (res2) => {
          if (res2.statusCode !== 200) return reject(new Error(`Status ${res2.statusCode}`));
          const file = fs.createWriteStream(path.join(__dirname, '..', 'src', 'assets', name));
          res2.pipe(file);
          file.on('finish', () => file.close(resolve));
        }).on('error', reject);
      } else if (res.statusCode === 200) {
        const file = fs.createWriteStream(path.join(__dirname, '..', 'src', 'assets', name));
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      } else {
        reject(new Error(`Failed ${name} ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

(async () => {
  for (const [name, url] of Object.entries(urls)) {
    try {
      await download(name, url);
      console.log('Saved', name);
    } catch (err) {
      console.error('Error', name, err.message);
      process.exitCode = 1;
    }
  }
})();
