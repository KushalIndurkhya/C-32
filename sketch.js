var str = "This is a string"
console.log(str)

var num = 100;
console.log(num);

var obj;
console.log(obj);

obj = null;
console.log(obj);

var bool = true;
console.log(bool);

var arr = [10,20,30];
console.log(arr);

console.log(arr[1]);

var arr1 = [10,"Kushal",30];
console.log(arr1);

var arr2 = [[10,20],[40,50],[60,70]];
console.log(arr2);

console.log(arr2[2][0])

arr.push(100);
console.log(arr);

arr.pop();
console.log(arr);

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint  = Matter.Constraint;

var engine, myWorld, ground;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4,constrainedLog;
var pig1,pig2;

var gamestate="onsling"

function preload(){

backgroundimg=loadImage("sprites/bg.png")
  
}
function setup() {
  createCanvas(1200,400);
  
  engine = Engine.create();
  myWorld = engine.world;

  
   box1 = new Box(700,320,70,70);
   box2 = new Box(920,320,70,70);
   box3 = new Box(700,240,70,70);
   box4 = new Box(920,240,70,70);
   box5 = new Box(810,160,70,70);
   pig1 = new Pig(810,350)
   pig2= new Pig(810,220)
   log2=new Log(810,180,300,PI/2)
   log1 = new Log(810,260,300,PI/2)
   log3 = new Log(760,120,150,PI/7)
   log4 = new Log(870,120,150,PI/-7)
   ground = new Ground(600,390,1200,20)
   bird = new Bird(200,10)
   constrainedLog = new Log(230,180,80,PI/2) 
   slingshot =new Slingshot(bird.Body,{x: 200, y:10});
   platform=new Ground(150,295,300,170)


   
   
  //console.log(object);
}

function draw() {
  background(backgroundimg);
  
  Engine.update(engine);
  
 box1.display();
 box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  ground.display();
  log3.display();
  log4.display();
  box5.display();
  bird.display();
  constrainedLog.display();
  slingshot.display();
  platform.display();

}


function mouseDragged(){
if(gamestate !=="launched")
Matter.Body.setPosition(bird.Body,{x:mouseX,y:mouseY})


}

function mouseReleased(){
 slingshot.fly();
 gamestate = "launched"
}

function keyPressed(){
  if(keyCode===32){
//slingshot.attach(bird.Body);
  }
}