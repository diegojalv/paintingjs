let staticImg;

function preload() {
  staticImg = loadImage('paint.jpg');
}

function setup() {
  createCanvas(800, 600);
  image(staticImg, 0, 0, width, height);
  // Save the static frame as a JPG image
  saveFrames("staticFrame", "jpg", 1, 1);
}
