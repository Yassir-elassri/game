const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const wpContent = path.join(__dirname, "..", "wp-content");
const link = path.join(publicDir, "wp-content");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

if (fs.existsSync(wpContent) && !fs.existsSync(link)) {
  try {
    fs.symlinkSync(wpContent, link, "junction");
    console.log("✓ Linked wp-content → public/wp-content");
  } catch (err) {
    console.warn(
      "Could not create symlink. Copy wp-content to public/wp-content manually.",
      err.message
    );
  }
} else if (fs.existsSync(link)) {
  console.log("✓ wp-content already linked");
} else {
  console.warn("⚠ wp-content folder not found");
}

console.log("Gamesooty setup complete!");
