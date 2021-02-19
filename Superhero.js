class Superhero{
    constructor(x,y,width,height){
        var options={
            frictionAir:0.005,
            density:1.0
        }
        this.body=Bodies.rectangle(this.x,this.y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.superimg=loadImage("images/Superhero-01.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        imageMode(CENTER);
        image(this.superimg,400,400,100,100);
        pop();
    }
    
}