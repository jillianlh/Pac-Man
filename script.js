//logic to display world; maps the world
var world = [
   [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
   [2,1,1,2,4,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,4,2,1,1,2],
   [2,1,1,2,2,1,1,2,2,1,1,2,4,1,2,2,2,2,2,2,2,1,4,2,1,1,2,2,1,1,2,2,1,1,2],
   [2,2,3,1,1,1,1,1,1,1,1,2,2,1,2,1,3,2,3,1,2,1,2,2,1,1,1,1,1,1,1,1,3,2,2],
   [2,1,1,2,2,2,2,2,2,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,2,2,2,2,2,2,1,1,2],
   [2,1,1,2,1,1,1,1,1,2,1,3,2,1,1,2,2,2,2,2,1,1,2,3,1,2,1,1,1,1,1,2,1,1,2],
   [2,1,1,2,1,3,3,3,1,2,2,2,2,1,1,2,1,1,1,2,1,1,2,2,2,2,1,3,3,3,1,2,1,1,2],
   [2,4,1,1,1,3,4,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,4,3,1,1,1,4,2],
   [2,1,1,2,1,3,3,3,1,2,2,2,2,1,1,2,1,1,1,2,1,1,2,2,2,2,1,3,3,3,1,2,1,1,2],
   [2,1,1,2,1,1,1,1,1,2,1,3,2,1,1,2,2,2,2,2,1,1,2,3,1,2,1,1,1,1,1,2,1,1,2],
   [2,1,1,2,2,2,2,2,2,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,2,2,2,2,2,2,1,1,2],
   [2,2,3,1,1,1,1,1,1,1,1,2,2,1,2,1,3,2,3,1,2,1,2,2,1,1,1,1,1,1,1,1,3,2,2],
   [2,1,1,2,2,1,1,2,2,1,1,2,4,1,2,2,2,2,2,2,2,1,4,2,1,1,2,2,1,1,2,2,1,1,2],
   [2,1,1,2,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,2,1,1,2],
   [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var cherryValue = 500, coinValue = 100, cookieValue = 900, direction = "right", walkValue = 1;

var worldDict = {
   0: 'empty',
   1: 'coin',
   2: 'brick',
   3: 'cherry',
   4: 'cookie'
}

var pacman = {
   x: 17,
   y: 1,
   score: 0,
}

var inky = {
   x: 16,
   y: 6
}

var pinky = {
   x: 18,
   y: 6
}

var clyde = {
   x: 16,
   y: 8
}

var blinky = {
   x: 18,
   y: 8
}

//logic to display the world
function displayWorld(){
   var output = "";

   for(var row = 0; row < world.length; row++){
      output += "<div class='row'>";
      for(var j = 0; j < world[row].length; j++){
         output += "<div class = '" + worldDict[world[row][j]] +"'></div>"
      }
      output += "</div>";
   }
   // console.log(output);
   document.getElementById("world").innerHTML = output;
}

//logic to display the score
function displayScore(){
   scoreDisplay = "Score: " + pacman.score;
   document.getElementById("score").textContent = scoreDisplay;
   if(pacman.score === 50000){
      pacman.score = "Winner!!!";
   }
   if(pacman.x === inky.x && pacman.y === inky.y){
      pacman.score = "You lose";
   }
   if(pacman.x === pinky.x && pacman.y === pinky.y){
      pacman.score = "You lose";
   }
   if(pacman.x === clyde.x && pacman.y === clyde.y){
      pacman.score = "You lose";
   }
   if(pacman.x === blinky.x && pacman.y === blinky.y){
      pacman.score = "You lose";
   }
}

//logic to display each ghost
function displayGhosts(){
   document.getElementById("inky").style.top = inky.y * 20 + "px";
   document.getElementById("inky").style.left = inky.x * 20 + "px";
   document.getElementById("pinky").style.top = pinky.y * 20 + "px";
   document.getElementById("pinky").style.left = pinky.x * 20 + "px";
   document.getElementById("clyde").style.top = clyde.y * 20 + "px";
   document.getElementById("clyde").style.left = clyde.x * 20 + "px";
   document.getElementById("blinky").style.top = blinky.y * 20 + "px";
   document.getElementById("blinky").style.left = blinky.x * 20 + "px";
}

//logic to move each ghost
function moveInky(){
   var rand = Math.floor((Math.random() * 4 + 1));
   if(rand === 1){
      if(world[inky.y][inky.x - 1] === 2){
         }else inky.x--;
   }
      else if(rand === 2){
      if(world[inky.y][inky.x + 1] === 2){
      }else inky.x++;
   }
      else if(rand === 3){
      if(world[inky.y - 1][inky.x] === 2){
      }else inky.y--;
   }
      else if(rand === 4){
      if(world[inky.y + 1][inky.x] === 2){
      }else inky.y++;
   }
}

function moveClyde(){
   var rand = Math.floor((Math.random() * 4 + 1));
   if(rand === 1){
      if(world[clyde.y][clyde.x - 1] === 2){
         }else clyde.x--;
   }
      else if(rand === 2){
      if(world[clyde.y][clyde.x + 1] === 2){
      }else clyde.x++;
   }
      else if(rand === 3){
      if(world[clyde.y - 1][clyde.x] === 2){
      }else clyde.y--;
   }
      else if(rand === 4){
      if(world[clyde.y + 1][clyde.x] === 2){
      }else clyde.y++;
   }
}

function moveBlinky(){
   var rand = Math.floor((Math.random() * 4 + 1));
   if(rand === 1){
      if(world[blinky.y][blinky.x - 1] === 2){
         }else blinky.x--;
   }
      else if(rand === 2){
      if(world[blinky.y][blinky.x + 1] === 2){
      }else blinky.x++;
   }
      else if(rand === 3){
      if(world[blinky.y - 1][blinky.x] === 2){
      }else blinky.y--;
   }
      else if(rand === 4){
      if(world[blinky.y + 1][blinky.x] === 2){
      }else blinky.y++;
   }
}

function movePinky(){
   var rand = Math.floor((Math.random() * 4 + 1));
   if(rand === 1){
      if(world[pinky.y][pinky.x - 1] === 2){
         }else pinky.x--;
   }
      else if(rand === 2){
      if(world[pinky.y][pinky.x + 1] === 2){
      }else pinky.x++;
   }
      else if(rand === 3){
      if(world[pinky.y - 1][pinky.x] === 2){
      }else pinky.y--;
   }
      else if(rand === 4){
      if(world[pinky.y + 1][pinky.x] === 2){
      }else pinky.y++;
   }
}

//logic to display pacman
function displayPacman(){
   document.getElementById("pacman").style.top = pacman.y * 20 + "px";
   document.getElementById("pacman").style.left = pacman.x * 20 + "px";
   document.getElementById("pacman").style.backgroundImage = "url('img/pacman" + direction + "1.png')";
   document.getElementById("pacman").style.backgroundImage = "url('img/pacman" + direction + walkValue + ".png')";
   if(walkValue === 1){
      walkValue = 2;
   }
   else if(walkValue === 2){
      walkValue = 1;
   }
}

//logic to move pacman
var pacmanCanMove = true;

document.onkeydown = function(e){
   if(pacmanCanMove){
      if(e.keyCode === 37 && world[pacman.y][pacman.x - 1] != 2){
         pacman.x--; 
         direction = "left";
      }
      else if(e.keyCode === 38 && world[pacman.y - 1][pacman.x] != 2){
         pacman.y--;
         direction = "up";
      }
      else if(e.keyCode === 39 && world[pacman.y][pacman.x + 1] != 2){
         pacman.x++;
         direction = "right";
      }
      else if(e.keyCode === 40 && world[pacman.y + 1][pacman.x] != 2){
         pacman.y++;
         direction = "down";
      }
   }
   
   if(world[pacman.y][pacman.x] === 1){
      world[pacman.y][pacman.x] = 0;
      pacman.score += coinValue;
      displayWorld();
      displayScore();
   }
   
   if(world[pacman.y][pacman.x] === 3){
      world[pacman.y][pacman.x] = 0;
      pacman.score += cherryValue;
      displayWorld();
      displayScore();
   }
   
   if(world[pacman.y][pacman.x] === 4){
      world[pacman.y][pacman.x] = 0;
      pacman.score += cookieValue;
      displayWorld();
      displayScore();
   }
   displayPacman();
}

//checks if pacman touches a ghost
function checkCollisions(){
   if(pacman.x === inky.x && pacman.y === inky.y){
      console.log("You're dead");
      pacmanCanMove = false;
   }
   if(pacman.x === pinky.x && pacman.y === pinky.y){
      console.log("You're dead");
      pacmanCanMove = false;
   }
   if(pacman.x === clyde.x && pacman.y === clyde.y){
      console.log("You're dead");
      pacmanCanMove = false;
   }
   if(pacman.x === blinky.x && pacman.y === blinky.y){
      console.log("You're dead");
      pacmanCanMove = false;
   }
}

//logic to start the game
function gameLoop(){
   console.log('gameLoop is running!');
   displayWorld();
   displayPacman();
   displayGhosts();
   displayScore();
   checkCollisions();
   moveInky();
   moveClyde();
   moveBlinky();
   movePinky();
   setTimeout(gameLoop, 150);
}

gameLoop();
