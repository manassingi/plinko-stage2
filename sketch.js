const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=240;
var ground;
var engine, world;
var score=0;
var count=0
var PLAY=1;
var END=0;
var gameState=PLAY;
var particle;
function preload()
{
	
}

function setup() {
	createCanvas(450, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(225,690,450,20)
	
  for(var k = 0; k <= width; k=k+90){
	divisions.push(new division(k,height-divisionHeight/2,10,200));

}

for (var j = 40; j<=width; j=j+50)
{
	plinkos.push(new plinko(j,75))
}
for (var j = 15; j<=width-10; j=j+50)
{
	plinkos.push(new plinko(j,175))
}

for (var j = 40; j<=width; j=j+50)
{
	plinkos.push(new plinko(j,275))
}
for (var j = 15; j<=width-10; j=j+50)
{
	plinkos.push(new plinko(j,375))
}
  
}


function draw() {
  rectMode(CENTER);
  background("225");
  textSize(30);
text("Score:"+score,50,50)

  fill("lightblue")
  textSize(50);

text("~1~",5,510)
text("~2~",90,550)
text("~3~",180,510)
text("~4~",270,550)
text("~5~",360,510)
  Engine.update(engine);

  if(particle!=null){
	  particle.display();

	  if(particle.body.position.y>660){

		if(particle.body.position.x<300){

			score=score+500;
			particle=null;
			if(count>5) gameState="END";
		}
	  }
  }

  for (var i = 0; i < plinkos.length; i++) {
     
	plinkos[i].display();
	
  }

 // if(frameCount%30===0){
	//particles.push(new partical(random(width/2-100, width/2+120), 20,20));
	
  //}


  for (var j = 0; j< particles.length; j++){
	  particles[j].display();
  }
  for (var k = 0; k< divisions.length; k++){
	divisions[k].display();
}

ground.display(); 
}

function mousePressed(){

	if(gameState!=="END"){

		core++;
		particle= new partical(mouseX,10,10,10);
	}
}
