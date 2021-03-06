const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops = 100;
var drops1;
var umbrellaPos;
function preload(){
    
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;   
   //drops = new Drops(random(0,400), random(0.400), 10)
    
    
}

function createDrop (){
    drops1 = new Drops(random(0,400), random(0.400), 10)
}

function draw(){
background(255);

push();
 this.image = loadImage("walking_1.png");
    drawSprites();
}   

