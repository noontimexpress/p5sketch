class Eyes{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    setColorIris(col1,col2,col3,col4){
        this.col1 = col1;
        this.col2 = col2;
        this.col3 = col3;
        this.col4 = col4;
        fill(this.col1,this.col2,this.col3,this.col4)
    }

    pupilWholeEye(h){
        this.h = h;
        ellipse(this.x,this.y, this.h*2, this.h);
        ellipse(this.x,this.y, this.h);
    }

    iris(r) {
        this.r = r;
        ellipse(this.x, this.y, this.r);
        noFill();
    }

}