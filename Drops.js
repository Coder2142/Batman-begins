class Drops {
    constructor(xPos, yPos, radius){
        var options={
         isStatic:true,
         restitution: 0,
         friction:1,
        }
        this.xPos=xPos;
        this.yPos=yPos;
        this.radius=radius;
        this.body=Bodies.circle(this.xPos,this.yPos,this.radius/2,options);
        World.add(world,this.body);
         
    }

    display(){
     for(var i=0; i<maxDrops; i++){
         drops.push(new createDrop(random(0, 400), random(0,400)));
        
     }   
     fill("blue");
     circle(0,0,this.radius);
    }
}