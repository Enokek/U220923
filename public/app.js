var color;
var value;

var Deck = [color, value];


var gamestart = [];
var YourCards = [];
var ComputerCards = [];
var hitCards = [];




/*drawCard = () => {

    var Rcard = (max) => Math.floor(Math.random(Deck) * max);
    color = Rcard(4)
    value = Rcard(13)
    cards = {color, value}
    Deck.pish(cards);
}

includecard = {} => {

    if(YourCards.includes (`${color} ${value}`))
}
*/
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

    var hitCard = document.getElementById("hitcard")
    }
    


    function Result ()
{
    var TheResults = document.getElementById("results")
    let result = 0;
    for ( var i = 0; i < Deck.length; i++) {

        if (Deck[i].value+1 > 10) {
            result += 10;

        }else {

            result += Deck[i].value+1;
        }
    }   
    TheResults.innerHTML = result;

    if ( result == 21 ) {
        alert('Winner!')
    } else if ( result > 21) {
        alert('Loser!')


}
}    




/*var yourcards =[]

function drawCard(max) {
var randomCard = (max) => Math.floor(Math.random(buildDeck) * max);
    console.log(randomCard(4) + ', ' + randomCard(13));

ComputerCards.push(buildDeck)
console.log(ComputerCards)

}

*/
