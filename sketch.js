const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drop;
var maxDrops = 100


function preload(){
    
}

function setup(){
    createCanvas(700, 600);
    engine = Engine.create();
	world = engine.world;

    drop1 = new Drop(30,30,5,5)
    drop2 = new Drop(450,30,5,5)
    drop3 = new Drop(20,90,5,5)
    drop4 = new Drop(600,600,5,5)
    drop5 = new Drop(400,400,5,5) 
    drop6 = new Drop(600,300,5,5)
    drop6 = new Drop(250,550,5,5)
    drop7 = new Drop(60,500,5,5)
    
}

function draw(){
    background(0);
    Engine.update(engine);

    drop1.display();
    drop2.display();
    drop3.display();
    drop4.display();
    drop5.display();
    drop6.display();
    drop7.display();






//    if(keyCode === 32) {
        Drop.maxDrops = []
//     }

}   







