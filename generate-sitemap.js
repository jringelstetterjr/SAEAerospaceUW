import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pages = [
  '/',
  '/about',
  '/team',
  '/sponsors'
  // Add more routes here
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (route) => `
  <url>
    <loc>https://www.wisconsinaerospace.com${route}</loc>
  </url>`
    )
    .join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully.');
