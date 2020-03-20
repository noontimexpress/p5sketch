let myFont;

function preload() {
  myFont = "./Barlow-Regular.otf";
}
function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background("green");
  textSize(200);
  //stroke(1);
  for (i = 0; i < 40; i++) {
    fill(100+i,200,100,1*i);
    text("sorry,", 30+2*i, 50+100+2*i);
    fill(20,100,120-i,90/i);
    text("sorry,", 108-2*-i, 50+178-2*i);
  }
  for (i = 0; i < 40; i++) {
    fill(100+i,200,100,1*i);
    text("i guess", 120+30+2*i, 233+100+2*i);
    fill(20,100,120-i,90/i);
    text("i guess", 120+108-2*-i, 233+178-2*i);
  }
  for (i = 0; i < 40; i++) {
    fill(100+i,200,100,1*i);
    text("i forgot", 230+30+2*i, 450+100+2*i);
    fill(20,100,120-i,90/i);
    text("i forgot", 230+108-2*-i, 450+178-2*i);
  }
  noLoop();
}
