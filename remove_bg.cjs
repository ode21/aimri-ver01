const { Jimp } = require("jimp");

async function removeBackground() {
  try {
    const image = await Jimp.read('C:\\Users\\omard\\.gemini\\antigravity\\brain\\87f8e144-5685-486b-a06d-3638d2092156\\media__1777475458497.jpg');
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0;
      }
    });
    image.write('C:\\Users\\omard\\.gemini\\antigravity\\scratch\\aimri-ver01\\src\\assets\\aimri-logo-transparent.png');
    console.log('Done!');
  } catch (error) {
    console.error('Error:', error);
  }
}

removeBackground();
