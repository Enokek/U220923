var computersum = 0;
var yourSum = 0;



var x;
var y;
var buildDeck = [x, y];
var gamestart = [];
var YourCards = [];



function drawCards() {
    const divMain = document.getElementById("main")
    divMain.hidden = false;
    
    YourCards = [];
    var randomCard = (max) => Math.floor(Math.random(buildDeck) * max);
    for (i=0; i < 2; i++) {
    var Cards = (randomCard(4) + ', ' + randomCard(13));
    YourCards.push(Cards);
    }
    console.log(YourCards);
    
    Computercard = document.getElementById("ComputerCards");
    Computercard.innerHTML = '';
    Computercard.innerHTML=(` Computers card are: ${YourCards} ` )
}

function hit (){
    var randomCard = (max) => Math.floor(Math.random(buildDeck) * max);
    var Cards = (randomCard(4) + ', ' + randomCard(13));
    YourCards.push(Cards);
    console.log(YourCards);
    }
    

    


/*var yourcards =[]

function drawCard(max) {
var randomCard = (max) => Math.floor(Math.random(buildDeck) * max);
    console.log(randomCard(4) + ', ' + randomCard(13));

ComputerCards.push(buildDeck)
console.log(ComputerCards)

}

*/
