class Monster{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:1.0,
            density:0.04
        }
        this.body=Bodies.rectangle(this.x,this.y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.monsterimg=loadImage("images/Monster-01.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y-100);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        imageMode(CENTER);
        image(this.monsterimg,900,400,100,100);
        pop();
    }
    
}