class Game {
    // code to be added
    constructor(startScreen,gameScreen,gameEndScreen,player,heigth,width,obstacles,score,lives,gameIsOver,gameIntervalId,gameLoopFrequency){
        this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = null;
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000/60);
    }
    start(){
        this.gameScreen.style.height=`${this.height}px`;
        this.gameScreen.style.width=`${this.width}px`;

        //hide start screen
        this.startScreen.style.display="none";
        //show the game screen
        this.gameScreen.style.display="block";
        
    // Runs the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
this.gameIntervalId=setInterval(()=>{
    this.gameLoop();
    },this.gameLoopFrequency)
    }
   
  gameLoop() {
    console.log("in the game loop");
    
    this.update();

    // If "gameIsOver" is set to "true" clear the interval to stop the loop
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId)
    }
  }

  update() {
    console.log("in the update");
  }
}
