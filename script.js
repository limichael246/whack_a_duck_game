const gameScreenWidth = 800;
const gameScreenHeight = 600;
const duckWidth = 50;
const duckHeight = 50;
const initialDuckCount = 15;

let gameStarted = false;
let ducksLeft = 0;
let startTime = 0;
let endTime = 0;

var quack_sound = new Audio('quack.mp3');


function startGame(){
    console.log("clicked game start");
    
    if(!gameStarted){
        console.log("start game");
    
        gameStarted = true;
        let winScreen = document.getElementById("winScreen");
        winScreen.style.visibility = "hidden";

        let startDate = new Date();
        startTime = startDate.getTime();
        
        let gameScreen = document.getElementById("gameScreen");
        ducksLeft = initialDuckCount;

        for(let i = 0; i < initialDuckCount; i++){
            let duck = document.createElement("img");
            duck.src="https://static.vecteezy.com/system/resources/thumbnails/019/552/573/small_2x/illustration-of-duck-animals-bird-drawing-vector.jpg";
            
            duckX = Math.floor(Math.random() * (gameScreenWidth - duckWidth));
            duckY = Math.floor(Math.random() * (gameScreenHeight - duckHeight));
            duck.style.left =  duckX + "px";
            duck.style.top = duckY + "px";
            duck.onclick = function() {
                console.log("duck hit");
                
                quack_sound.play();
                ducksLeft --;
                if(ducksLeft <= 0){
                    endGame();
                }

                this.remove();
            };
            

            gameScreen.appendChild(duck)
        }
    }
}

function endGame(){
    console.log("game done");

    let finishDate = new Date();
    finishTime = finishDate.getTime();

    let score = document.getElementById("score");
    score.innerHTML = "Your score is " + ((finishTime-startTime)/1000) + " seconds.";

    let winScreen = document.getElementById("winScreen");
    winScreen.style.visibility = "visible";

    gameStarted = false;
}