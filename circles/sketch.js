let width = 500;
let height = 500;
let size;
let speed = 1;

function setup() {
  createCanvas(width, height);
  size = 100;
}

function draw() {
  background(200, 200, 200, 50);
  fill(200, 40, 40, 30);
  noStroke();

push();
translate(50,50);
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      circle(i * 100, j * 100, size);
    }
  }
  size = size - speed;
pop();

  if (size < 0) {
    speed = -1;
  }
  if (size > 200){
    speed = 1;
  }
}
