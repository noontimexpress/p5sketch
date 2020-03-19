let crazy = [];
let fr = 3;

function setup() {
    createCanvas(400, 400);
    frameRate(fr);
    for (let i=0; i < 2; i++){
        crazy[i] = new Eyes(random(width), random(height));
    }
}
function draw(){
    background(000);
    for (let i=0; i < 2; i++){
        let arbit = random(0,100);
        fill(999, random(256));
        crazy[i].pupilWholeEye(random(arbit,100));
        crazy[i].setColorIris(random(256), random(256), random(256), random(256));
        crazy[i].iris(random(0,arbit));
    }
}
