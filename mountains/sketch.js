let canvasSize = 1000;

let first = 0;
// let second = 100;
// let third = 1000;

let runX = 0;
let inc = 0.01;

let testLines = 15;
let ratio = canvasSize / testLines;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background("white");
}

function draw() {
  noStroke();
  for (j = 0; j < canvasSize; j++) {
    for (i = 0; i < testLines; i++) {
      let startLine = first + 10 * i;
      fill(45, 0, 0, 400 / testLines);
      let anyLine = map(noise(startLine), 0, 1, ratio * i - 20, 80 + ratio * i);
      rect(runX, anyLine, 1, height - anyLine + 20);
    }
    first = first + inc;
    runX++;
  }
  saveCanvas("myCanvas", "png");
  noLoop();
}


// fill(200, 0, 0, 256 / testLines);
// let topLine = map(noise(first), 0, 1, 0, 100);
// rect(runX, topLine, 1, height - topLine);

// fill(200, 0, 0, 256 / testLines);
// let middleLine = map(noise(second), 0, 1, 0 + ratio, 100 + ratio);
// rect(runX, middleLine, 1, height - middleLine);

// fill(200, 0, 0, 256 / testLines);
// let bottomLine = map(noise(third), 0, 1, 0 + ratio * 2, 100 + ratio * 2);
// rect(runX, bottomLine, 1, height - bottomLine);

// second = second + inc;
// third = third + inc;
