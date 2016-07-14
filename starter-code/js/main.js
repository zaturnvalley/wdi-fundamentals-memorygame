var cardOne = "queen"; /* Card One is a Queen */
var cardTwo = "queen"; /* Card Two is a Queen */
var cardThree = "king"; /* Card Three is a King */
var cardFour = "king"; /* Card Four is a King */

// if(cardOne===cardTwo){
//     alert("You found a match!");
// }
// else if(cardOne===cardThree){
//     alert("You found a match!");
// }
// else if(cardOne===cardFour){
//     alert("You found a match!");
// }

// else if(cardTwo===cardThree){
//     alert("You found a match!");
// }

// else if(cardTwo===cardFour){
//     alert("You found a match!");
// }

// else if(cardThree===cardFour){
//     alert("You found a match!");
// }
// else{ alert("Sorry, try again.");} 

var board = document.getElementById('game-board');

for (var i = 0; i < 4; i++) {
 document.createElement('div').className = 'card';
}
// document.getElementsByClassName('board').appendChild('card');

var createBoard = function () {
    for (var i = 0; i < 4; i++) {
        document.createElement('div').className = 'card';
        // document.getElementsByClassName('board').appendChild('card');
 
    }
};
createBoard();

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var createBoard = function (){
    for (var i = 0; i < cards.length; i++){
    console.log('card'+i)
    document.getElementById('card'+(i+1)).setAttribute('data-card', cards[i]);
        
    /*when card is clicked, the function will be executed*/
    document.getElementById('card'+(i+1)).addEventListener('click', isTwoCards);
    };
};

var isMatch = function (){
  if (cardsInPlay[0] === cardsInPlay[1]){
      alert("You have a match!");
  }  
    else { alert("Sorry, try again.")};
};

var isTwoCards = function(){
    if(this.getAttribute('data-card')==="king"){
      this.innerHTML = '<img src="images/king_front.png"/>'
    } else {this.innerHTML = '<img src="images/queen_front.png"/>'};

    cardsInPlay.push(this.getAttribute('data-card'));
      if (cardsInPlay.length === 2){
          isMatch(cardsInPlay);
          cardsInPlay = [];
          var cardsToErase = document.querySelectorAll("[data-card="+this.getAttribute('data-card')+"]")

          cardsToErase[0].innerHTML = '<img src="images/playing-card-back.jpg" alt="Card Back">';
          cardsToErase[1].innerHTML = '<img src="images/playing-card-back.jpg" alt="Card Back">';
      }
    };
createBoard();