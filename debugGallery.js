// debugGallery.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageFolder = path.join(__dirname, 'src', 'assets', 'MediaGalleryImgs');
const galleryJSONPath = path.join(__dirname, 'src', 'sections', 'PhotoGallery', 'gallery.json');

// Read files and generate gallery JSON
fs.readdir(imageFolder, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const images = files.filter(file => /\.(webp|jpg|jpeg|png)$/i.test(file));

  const gallery = images.map((img, index) => ({
    image: img,
    title: `Event ${index + 1}`,
    description: `Description for event ${index + 1}`
  }));

  fs.writeFile(galleryJSONPath, JSON.stringify(gallery, null, 2), err => {
    if (err) {
      console.error('Error writing JSON:', err);
    } else {
      console.log('gallery.json successfully created!');
    }
  });
});
