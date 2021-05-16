var database,playerCount,Form,player,Game;
var gameState=0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
Game = new game()
Game.getState;
Game.start;

}

function draw(){
  background("Green");
  
    
    drawSprites();
  
}

