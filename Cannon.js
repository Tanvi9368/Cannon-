class Cannon{
    constructor(x,y,w,h,angle) {
        this.x=x
        this.y=y
        this.h=h
        this.w=w
        this.angle=angle
        //this.body=Bodies.rectangle(this.x,this.y)
        
    }
        display() {
            rectMode(CENTER)
            rect(this.x,this.y,this.w,this.h)
        
        }
    
}