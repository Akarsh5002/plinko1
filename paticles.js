class Particles{
    constructor(x,y,radius){
        var options = {
            
            restitution:'0.4',
            
        }
        //this.x = x;
        //this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);

    }
    display(){
        
        var pos1 = this.body.position;
        var angle = this.body.angle;
        push();
        
        translate(pos1.x,pos1.y);
        rotate(angle);
        
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}