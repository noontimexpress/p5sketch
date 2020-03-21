function setup() {
  createCanvas(600, 600);
  background("white");
}

class Fortune {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    //shadow
    fill(10, 10, 10, 10);
    for (let i = 0; i < 30; i++) {
      arc(
        this.x + 4,
        this.y + 8,
        80-i*2,
        80-i*2,
        -QUARTER_PI - 0.3,
        PI + QUARTER_PI + 0.3,
        PIE
      );
    }

    fill(random(100, 200), random(100, 200), random(100, 200));
    arc(this.x, this.y, 80, 80, -QUARTER_PI - 0.3, PI + QUARTER_PI + 0.3, PIE);
  }
}

function draw() {
  noStroke();
  let shape1 = new Fortune(random(width), random(height));
  shape1.show();
}
