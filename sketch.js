var ball;
var position,database;
var gameState = 0,playerCount = 0,form,game,player;

function setup(){
    createCanvas(500,500); 
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}
function draw(){
    background("white");
    
}

