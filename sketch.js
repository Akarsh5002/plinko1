const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,bg,bars,bars1,bars2,bars3,bars4,bars5;
var plinko = [];
var particles = [];

function preload(){
    bg = loadImage("dd.png");
}

function setup(){
    var canvas = createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(240,570,500,10);
    bars = new Division(70,437,10,260);
    bars1 = new Division(140,437,10,260);
    bars2 = new Division(210,437,10,260);
    bars3 = new Division(280,437,10,260);
    bars4 = new Division(350,437,10,260);
    bars5 = new Division(420,437,10,260);
for(var i = 0;i<=width;i=i+50 ){
    plinko.push(new PLINKO(i,55));
}
for(var i = 20;i<=width;i=i+50 ){
    plinko.push(new PLINKO(i,125));
}
for(var i = 0;i<=width;i=i+50 ){
    plinko.push(new PLINKO(i,180));
}
for(var i = 50;i<=width;i=i+50 ){
    plinko.push(new PLINKO(i,245));
}

   
}

function draw(){
   background(bg);
   Engine.update(engine);
   ground.display();
bars.display();
bars1.display();
bars2.display();
bars3.display();
bars4.display();
bars5.display();
for(var i = 0;i<plinko.length;i++)
{
    plinko[i].display();
}

if(frameCount%60 ===0){
    particles.push(new Particles(226,10,5));
}
for(var j = 0;j<particles.length;j++)
{
    particles[j].display();
}
}


