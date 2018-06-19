//1. Randomly choose a target score between 19-120
//2. Randomly select 4 numbers for each crystal between 1-12
//3. When clicking each crystal, it should increase "Your Score"
//4. Everytime "Your score" changes, it should check against the "Target Score"
//5. If target score is exceeded then prompt "You Lost" or if it matches then you "You win"

var randomScore = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var yourScore = 0;
var wins = 0;
var losses = 0;

//Randomly choose Target Score between 19 and 120
function generateTargetScore(){
    randomScore = Math.floor(Math.random(19)*120);
    console.log(randomScore);

    //Select 4 random numbers for all 4 crystals
    crystal1 = Math.floor(Math.random()*11+1);
    crystal2 = Math.floor(Math.random()*11+1);
    crystal3 = Math.floor(Math.random()*11+1);
    crystal4 = Math.floor(Math.random(1)*11+1);
    console.log(crystal1, crystal2, crystal3, crystal4);

    //Show Target Score
    $("#divTargetScore").text(randomScore);

    //Set default score
    $("#spanWinningScore").text(yourScore);
    $("#spanWins").text(wins);
    $("#spanLosses").text(losses);

}

function resetGame() {
    //reset all score and re-generate target score
    yourScore = 0;
    generateTargetScore();
    $("#spanWinningScore").text(yourScore);
    $("#spanWins").text(wins);
    $("#spanLosses").text(losses);
    
}

function checkScore() {
    if (yourScore > randomScore){
        alert("Sorry, you exceeded target score, please try again!")
        losses++;
        resetGame();
    }else if (yourScore == randomScore) {
        alert("Good Job, you WON!");
        wins++;
        resetGame();
    }
}

generateTargetScore();

$("#crystalPic1").click(function(){
    yourScore = crystal1 + yourScore;
    $("#spanWinningScore").text(yourScore);
    checkScore();
});

$("#crystalPic2").click(function(){
    yourScore = crystal2 + yourScore;
    $("#spanWinningScore").text(yourScore);
    checkScore();
});

$("#crystalPic3").click(function(){
    yourScore = crystal3 + yourScore;
    $("#spanWinningScore").text(yourScore);
    checkScore();
});

$("#crystalPic4").click(function(){
    yourScore = crystal4 + yourScore;
    $("#spanWinningScore").text(yourScore);
    checkScore();
});