//declaring variable
var name="my name is dhruv";
console.log(name);

var num=15;
console.log(num);

var a=2+5;
console.log(a);

var b=2*6;
console.log(b);

var c=2-5;
console.log(c);

var d=1/0;
console.log(d);

var e=2%6;
console.log(e);

var dog="hello" +" world";
console.log(dog);

if(3>2){
console.log("true");
}
else{
  console.log("false");
}

var name2="MY NAME";
switch (name2) {
  case "MY NAME":
    console.log("condition1");
    
    break;
    case "my name":
      console.log("condition2");
      break

  default:
    break;
    console.log("no condition is true");
}


for (let index = 0; index <50; index=index+5) {
 console.log(index);
  
}

































































var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
