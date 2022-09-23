var computersum = 0;
var yourSum = 0;



/*function buildDeck () {
var number = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
let cardType = ['C','H','S','D' ] Clubs, Hearts, Spades, Diamonds
    

// random x = 0..3, y = 0..12;


var CardCharacter = {

    Clubs: '',
    Hearts: '',
    Spades: '',
    Diamonds: ''

}
*/
var x;
var y;
var buildDeck = [x, y];
  
console.table()

function drawCard(max) {
    var randomCard = (max) => Math.floor(Math.random(buildDeck) * max);
    console.log(randomCard(4) + ', ' + randomCard(13));


   
}



