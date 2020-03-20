let canvasSize = 600;

let first = 0;
// let second = 100;
// let third = 1000;

let runX = 0;
let inc = 0.01;

let testLines = 8;
let ratio = canvasSize / testLines;


function setup() {
  createCanvas(canvasSize, canvasSize);
  background("white");
}

function draw() {
  noStroke();

  for (i = 0; i < testLines; i++) {
    fill(40, 40, 200, 256 / testLines);
    let anyLine = map(noise(first), 0, 1, 0 + ratio * i, 100);
    rect(runX, anyLine, 1, height - anyLine);
  }
  first = first + inc;
  runX++;
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

