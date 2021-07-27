var database;
var gameState=0;
var playerCount=0;
var form, game, player;
var canvas, backgroundImg;



function setup(){
  database = firebase.database();
  console.log(database);
  canvas= createCanvas(400,400);

  game= new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background("white");
  
}