var computersum = 0;
var yourSum = 0;



var x;
var y;
var Deck = [color, value];
var gamestart = [];
var YourCards = [];
var ComputerCards = [];
var hitCards = [];



function drawCards() {
    const divMain = document.getElementById("main")
    divMain.hidden = false;
    YourCards = [];
    var randomCard = (max) => Math.floor(Math.random(Deck) * max);

    for (i=0; i < 2; i++) {
    var Cards = (randomCard(4) + ', ' + randomCard(13));
    YourCards.push(Cards);
    }

    ComputerCards = [];
    var randomCard = (max) => Math.floor(Math.random(Deck) * max);
    for (i=0; i < 2; i++) {
    var Cards = (randomCard(4) + ', ' + randomCard(13));
    ComputerCards.push(Cards);
    
    }

    Computercard = document.getElementById("ComputerCards");
    Computercard.innerHTML = '';
    Computercard.innerHTML=(` Computers card are: ${YourCards} ` )

    playercard = document.getElementById("PlayerCards");
    playercard.innerHTML = '';
    playercard.innerHTML=(` Players card are: ${ComputerCards} ` )

}

 
function hit (){
    var randomCard = (max) => Math.floor(Math.random(Deck) * max);
    var Cards = (randomCard(4) + ', ' + randomCard(13));
    hitCards.push(Cards);

    hitCard = document.getElementById("hitcard")
    hitCard.innerHTML = (`${hitCards}` )
    }
    

    


/*var yourcards =[]

function drawCard(max) {
var randomCard = (max) => Math.floor(Math.random(buildDeck) * max);
    console.log(randomCard(4) + ', ' + randomCard(13));

ComputerCards.push(buildDeck)
console.log(ComputerCards)

}

*/
