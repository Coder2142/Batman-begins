class Umbrella {
    constructor(xPos, yPos, radius){
        var options={
         isStatic:true,
         restitution: 0,
         friction:1,
        }

        this.xPos=xPos;
        this.yPos=yPos;
        this.radius=radius;
        this.image=loadImage('walking_1.png');
        this.body=Bodies.circle(this.xPos,this.yPos,this.radius/2,options);
        World.add(world,this.body);
        
    }

    display(){
    var umbrellaPos = this.body.position;
    rectMode(CENTER);
    strokeWeight(3);
    fill(255,0,255)
    push();
    translate(umbrellaPos.x, umbrellaPos.y);
    circle(0,0,this.radius);
    imageMode(CENTER);
    image(this.image, 0,0,this.radius)
    pop();
    }
 }
