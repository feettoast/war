var cards = [];
var firstPlayer = [];
var secondPlayer = [];
var $player1Count = $("#player1Count");
var $player2Count = $("#player2Count");
var $firstPlayerSuit = $("#firstPlayerSuit");
var $secondPlayerSuit = $("#secondPlayerSuit");
var $winner = $("#winner");
var playedCards = [ ]
var $draw =$("#draw");
var $firstPlayerNumber=$("#firstPlayerNumber");
var $secondPlayerNumber=$("#secondPlayerNumber");
var numberImg1 = undefined;
var numberImg2 = undefined;
var assignRunning = false;
var $firstPlayer = $("#firstPlayer");
var $secondPlayer = $("#secondPlayer");
var $title = $("#title");
var $p1CountDsp = $("#p1CountDsp");
var $p2CountDsp = $("#p2CountDsp");
var useComp = false
var useMath = false
var winner = 0;
var integerChoice = false;
var number1;
var number2;
var chosen = 0;
var $firstPlayerWinner = $("#firstPlayerWin");
var $secondPlayerWinner = $("#secondPlayerWin");
var $PLable = $(".PLable");
var $yInt = $("#yInt");
var $nInt = $("#nInt");
var $submit = $("#submit")
var $playerAnswer = $("#playerAnswer");
var addition = false
var playerAnswer;
var answer;
var subtract = false;
var multiply = false;
for (i = 1; i < 14; i++) {
    for (k = 1; k < 5; k++)      
    {
        j = [i,k]
        cards.push(j)
    }
}   
cards.shuffle = function(){
    console.log("shuffle");
    var input = this;
    for (var i = cards.length-1; i>=0; i--)
    {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = cards[randomIndex][0];
        var itemAtSecond = cards[randomIndex][1];
        input[randomIndex][0] = input[i][0];
        input[randomIndex][1] = input[i][1];
        input[i][0] = itemAtIndex;
        input[i][1] = itemAtSecond;
    }
    return input;
}
cards.shuffle();
var half = cards.length/2
for (i = 0; i<half; i++)
{
    firstPlayer.push(cards[i]);
}
cards.splice(0,half);
    secondPlayer = cards;
    $player1Count.html(firstPlayer.length);
    $player2Count.html(secondPlayer.length);
function assign(){
    assignRunning = true;
    console.log("assign");
    if (firstPlayer.length == 0 || secondPlayer.length == 0) { endGame(); 
        return;
    }
    $firstPlayer.css("border-color", "black"); 
    $secondPlayer.css("border-color", "black"); 
    $firstPlayerSuit.css("display", "block");
    $secondPlayerSuit.css("display", "block");
    $firstPlayerSuit.empty();
    $secondPlayerSuit.empty();
    number1= firstPlayer[0][0];
    number2 = secondPlayer[0][0];
    $firstPlayerNumber.html(number1);
    $secondPlayerNumber.html(number2);
    suit1 = firstPlayer[0][1];
    suit2 = secondPlayer[0][1];
    if (integerChoice == true){

        if (suit1 == 1){
        
        number1 = (-1)*number1;
        
        }
        
        if (suit1 == 2){
        
        number1 = (-1)*number1;
        
        }
        
        if (suit2 == 1){
        
        number2 = (-1)*number2;
        
        }
        
        if (suit2 == 2){
        
        number2 = (-1)*number2;
        
        }
        
        }
    if (suit1 == 1){
        suit1 = "<img src='./resources/images/heart.png'>"
    }
    if (suit1 == 2){
        suit1 = "<img src='./resources/images/diamond.png'>"
    }
    if (suit1 == 3){
        suit1 = "<img src='./resources/images/club.png'>"
    }
    if (suit1 == 4){
        suit1 = "<img src='./resources/images/spade.png'>"
    }
    if (suit2 == 1){
        suit2 = "<img src='./resources/images/heart.png'>"
    }
    if (suit2 == 2){
        suit2 = "<img src='./resources/images/diamond.png'>"
    }
    if (suit2 == 3){
        suit2 = "<img src='./resources/images/club.png'>"
    }
    if (suit2 == 4){
        suit2 = "<img src='./resources/images/spade.png'>"
    }
    if ((Math.abs(number1))<11){

        for (i=0; i<(Math.abs(number1)); i++) {
        
        $firstPlayerSuit.append(suit1);
        
        };
        
        } else {
        
        if ((Math.abs(number1)) == 11) {
        
        numberImg1 = "<img src='./resources/images/jack.png'/>";
        
        $firstPlayerSuit.append(suit1);
        
        $firstPlayerNumber.html(numberImg1);
        
        }
        
        if ((Math.abs(number1)) == 12) {
        
        numberImg1 = "<img src='./resources/images/queen.png'/>";
        
        $firstPlayerSuit.append(suit1);
        
        $firstPlayerNumber.html(numberImg1);
        
        }
        
        if ((Math.abs(number1)) == 13) {
        
        numberImg1 = "<img src='./resources/images/king.png'/>";
        
        $firstPlayerSuit.append(suit1);
        
        $firstPlayerNumber.html(numberImg1);
        
        }
        
        }
        if ((Math.abs(number2))<11){

            for (i=0; i<(Math.abs(number2)); i++) {
            
            $secondPlayerSuit.append(suit2  );
            
            };
            
            } else {
            
            if ((Math.abs(number2)) == 11) {
            
            numberImg2 = "<img src='./resources/images/jack.png'/>";
            
            $secondPlayerSuit.append(suit2);
            
            $secondPlayerNumber.html(numberImg2);
            
            }
            
            if ((Math.abs(number2)) == 12) {
            
            numberImg2 = "<img src='./resources/images/queen.png'/>";
            
            $secondPlayerSuit.append(suit2);
            
            $secondPlayerNumber.html(numberImg2);
            
            }
            
            if ((Math.abs(number2)) == 13) {
            
            numberImg2 = "<img src='./resources/images/king.png'/>";
            
            $secondPlayerSuit.append(suit2);
            
            $secondPlayerNumber.html(numberImg2);
            
            }
            
            }
    playedCards.push(firstPlayer[0]);
    playedCards.push(secondPlayer[0]);
    firstPlayer.splice(0,1);
    secondPlayer.splice(0,1);
}
$firstPlayerWinner.on('click', function(){
    chosen = 1;
    determineWinner()
})
$secondPlayerWinner.on('click', function(){
    chosen= 2;
    determineWinner()
})
 function determineWinner(){
if (assignRunning == true){
if (number1 == number2) {
        
    //checks if the players tied
    
    console.log("had tie");
    
    //logs the tie

    var audio = new Audio('./resources/cards.mp3');

    //creates a variable that holds the sound of a card

    $PLable.html("This means war!");
    
    //announces the war

    window.setTimeout(function() {
    
    //delays things from changing for 2000ms    
        
    for (i=0; i<3; i++){
    
    //loops three times for three cards
    
    playedCards.push(firstPlayer[0]);
    
    //one card from each player’s hand is played
    
    playedCards.push(secondPlayer[0]);
    
    //they go into the played cards array
    
    firstPlayer.splice(0,1);
    
    //they are taken off the players’ arrays
    
    secondPlayer.splice(0,1);
    
    }
    
     
    
    $firstPlayerSuit.css("display", "none");
    
    //removes the suit from the card area
    
    $secondPlayerSuit.css("display", "none");
    
    //removes the suit from the card area
    
    numberImg1 = "<img style='height:14rem;' src='./resources/images/cards.png'/>";
    
    $firstPlayerNumber.html(numberImg1);
    
    //places an image in the number area of a card back
    
    numberImg2 = "<img style='height:14rem;' src='./resources/images/cards.png'/>";
    
    $secondPlayerNumber.html(numberImg2);
    
    //places an image in the number area of a card back

    audio.play();
    
    //plays the sound
}, 2000);   
    
    window.setTimeout(function() {
    
    //delays the next thing from happening for 3000ms
    
    audio.play();
    
    //plays audio
    
    }, 3000);
    
    //determines how long to wait
    
    window.setTimeout(function() {
    
    //same thing again
    
    audio.play();
    }, 4000);
    //this time waits 4000ms to separate the sounds
    window.setTimeout(function(){
        $("#PLable1").html("Player");
        $("#PLable2").html("Computer");
        assign();
    },5000);
    //this time waits 5000ms to separate the sounds
}
else{ 
compareMath();
mathCheck();
}}}
function endGame(){
    $firstPlayerSuit = null;
    $secondPlayerSuit = null;
    $title.html("GAME OVER!");
    $player2Count.css("display", "none");
    $p2CountDsp.css("display", "none");
    $p1CountDsp.css("display", "none");
    if (firstPlayer.length == 0){
        $winner.html("Player Two Wins!");
    }
    if (secondPlayer.length == 0){
        $winner.html("Player One Wins!");
    }    
}
$draw.on('click', function(){
    if(assignRunning == false){
        assign();
    }
})
$("#settings").on('click', function() {
    $("#settings").css("display", "none");
    
    $(".hidden").css("display", "none");
    
    $("#mathOptions").css("display", "block");
})
$("#compare").on('click', function() {

    $("#settings").css("display", "none");

    $("#mathOptions").css("display", "none");
    
    $("#intOptions").css("display", "block");
    
    $("#compareDirections").css("display", "block");
    
    $(".winner").css("display", "block");
    
    useComp = true
    
    })
$("#arithmetic").on('click', function() {
    $("#settings").css("display", "none");

    $("#mathOptions").css("display", "none");
        
    $("#arithOptions").css("display", "block");

    useMath = true
    })
$(".aOp").on('click', function(){
    $("#intOptions").css("display", "block");

    $("#arithOptions").css("display", "none");

    $("#submit").css("display", "block");
})
$("#add").on('click', function(){
    addition = true;
})
$("#subtract").on('click', function(){
    subtract = true;
})
$("#multiply").on('click', function(){
    multiply = true;
})

function compareMath(){
    console.log("compare math")
    if(number1 > number2){
        winner = 1;
    }
    else{
        winner = 2;
    }
}
$("#yInt").on('click', function() {
    integerChoice = true
    $("#intOptions").css("display", "none");
    $draw.css("display", "block")
})
$nInt.on('click', function() {
    integerChoice = false
    $("#intOptions").css("display", "none");
    $draw.css("display", "block")
})

function mathCheck(){
    console.log("math check")
    if(chosen == winner){
        for(i=0; i<playedCards.length; i++){
            firstPlayer.push(playedCards[i])
        }
    $player1Count.html(firstPlayer.length);
    playedCards=[];
    $winner.html("Player Wins");}
else {
    for(i=0; i<playedCards.length; i++){
        secondPlayer.push(playedCards[i]);
    }
    $player2Count.html(secondPlayer.length);
    playedCards = [];
    $winner.html("Computer Wins");
}
console.log("updated card counts");
playedCards = [];
$player1Count.html(firstPlayer.length);
$player2Count.html(secondPlayer.length);
$("input").val("");  
assignRunning = false;
}
$nInt.on('click', function(){
    console.log("registered");
})
$submit.on('click', function(){
    playerAnswer = $playerAnswer.val().trim();

    submit();
})
function submit(){

    if(addition == true){addMath();}
    if(subtract == true){subtractMath();}
    if(multiply == true){multiplyMath();}
    if(playerAnswer == answer){
        chosen = winner;
    }
    else{
        chosen = winner-1;
    }

    mathCheck();
    }
    function addMath(){
        answer = number1 + number2;
    }
    function subtractMath(){
        answer = number1 - number2;
    }
    function multiplyMath(){
        answer = number1 * number2;
    }