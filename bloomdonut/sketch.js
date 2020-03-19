let canvasSize = 600;
let xoff1 = 0;
let xoff2 = 10000;
let xoff3 = 5000;
let inc = 0.01;
let lim = 1;

function setup() {
    createCanvas(canvasSize, canvasSize);
    background(000);

}

function draw(){

    push();
    translate(width/2,height/2);
    rotate(radians(frameCount));
        let x = map(noise(xoff1), 0, 1, 0, canvasSize/2);
        let y = map(noise(xoff2), 0, 1, 0, canvasSize/2);
        let size = map(noise(xoff3), 0, 1, 0, canvasSize/4); 
        let color1 = map(noise(xoff1), 0, 1, 0, 255);
        let color2 = map(noise(xoff2), 0, 1, 0, 255);
        let color3 = map(noise(xoff3), 0, 1, 0, 255);
        xoff1 += inc;
        xoff2 += inc;
        xoff3 += inc;
        noStroke();
        fill(color1, color2, color3, inc*100);
        ellipse(x, y, size);
        ellipse(y, x, size);
        ellipse(-y, -x, size);
        ellipse(-x, -y, size);
        ellipse(-x, y, size);
        ellipse(x, -y, size);
        ellipse(-y, x, size);
        ellipse(y, -x, size);
        pop();
        console.log(inc);

    if(inc < lim){
        inc = inc + .0001;
    }
    else{
        inc = lim;
    }
    if(inc > .1){
        background(000);
        inc = 0.01;
    }
}