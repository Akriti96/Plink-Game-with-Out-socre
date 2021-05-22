var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 15; k <=800; k = k + 70) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 20; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+60) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width-10; j=j+60) 
  {
    plinkos.push(new Plinko(j,280));
  }
  
  //create 4th row of plinko objects
  for (var j = 20; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,380));
  }

  //create particle objects
  
    
}
 


function draw() {
  background("black");

  text("Score : "+score,20,40);
  fill("white");
  textSize(25)
  text(" 500 ", 15, 550);
  text(" 500 ", 90, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 230, 550);
  text(" 100 ", 300, 550);
  text(" 100 ", 370, 550);
  text(" 100 ", 440, 550);
  text(" 200 ", 520, 550);
  text(" 200 ", 580, 550);
  text(" 200 ", 650, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
   if(frameCount%20===0){
     particles.push(new Particle(random(300,500),10,10))
     score++
   }
   for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
}