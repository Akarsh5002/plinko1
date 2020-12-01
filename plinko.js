class PLINKO{
    constructor(x,y){
        var options = {
restitution:1,
friction:0,
            isStatic:true,
        }
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.body = Bodies.circle(x,y,this.radius,options);
        
        World.add(world,this.body);

    }
    display(){
        var pos1 = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos1.x,pos1.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("yellow");
        fill("green");
        ellipse(0,0,10);
        pop();
    }
}