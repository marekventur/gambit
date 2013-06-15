

Card = function (rank, suit) {
	this.rank = rank;
	this.suit = suit;

	this.toString   = cardToString;
}

//-----------------------------------------------------------------------------
// cardFromJson(): We're storing and transmitting only JSON. This helper 
// function converts a JSON object to a Card object
//-----------------------------------------------------------------------------
cardFromJson = function (json) {
  return new Card(json.rank, json.suit);
}

//-----------------------------------------------------------------------------
// cardToString(): Returns the name of a card (including rank and suit) as a
// text string.
//-----------------------------------------------------------------------------

function cardToString() {

  var suit;

  switch (this.suit) {
    case "C" :
      suit = "\u2663";
      break;
    case "D" :
      suit = "\u2666"
      break;
    case "H" :
      suit = "\u2665"
      break;
    case "S" :
      suit = "\u2660"
      break;
    default :
      suit = null;
      break;
  }

  if (suit == null)
    return "";

  return this.rank + " " + suit;
}



//=============================================================================
// Stack Object
//=============================================================================

//-----------------------------------------------------------------------------
// Stack constructor function.
//-----------------------------------------------------------------------------

Stack = function () {

  // Create an empty array of cards.

  this.cards = new Array();

  this.makeDeck  = stackMakeDeck;
  this.shuffle   = stackShuffle;
  this.deal      = stackDeal;
  this.draw      = stackDraw;
  this.addCard   = stackAddCard;
  this.combine   = stackCombine;
  this.cardCount = stackCardCount;
}

//-----------------------------------------------------------------------------
// stackMakeDeck(n): Initializes a stack using 'n' packs of cards.
//-----------------------------------------------------------------------------

function stackMakeDeck(n) {

  var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
  var suits = new Array("C", "D", "H", "S");
  var i, j, k;
  var m;

  m = ranks.length * suits.length;

  // Set array of cards.

  this.cards = new Array(n * m);

  // Fill the array with 'n' packs of cards.

  for (i = 0; i < n; i++)
    for (j = 0; j < suits.length; j++)
      for (k = 0; k < ranks.length; k++)
        this.cards[i * m + j * ranks.length + k] = new Card(ranks[k], suits[j]);
}

//-----------------------------------------------------------------------------
// stackShuffle(): Shuffles a stack of cards
//-----------------------------------------------------------------------------

function stackShuffle() {
  var i, j;
  var temp;

  // fisher-yates shuffling algorithm (guarantees unbiasedness)
  for (i = this.cards.length - 1; i >= 1; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;
  }
}

//-----------------------------------------------------------------------------
// stackDeal(): Removes the first card in the stack and returns it.
//-----------------------------------------------------------------------------

function stackDeal() {

  if (this.cards.length > 0)
    return this.cards.shift();
  else
    return null;
}

//-----------------------------------------------------------------------------
// stackDraw(n): Removes the indicated card from the stack and returns it.
//-----------------------------------------------------------------------------

function stackDraw(n) {

  var card;

  if (n >= 0 && n < this.cards.length) {
    card = this.cards[n];
    this.cards.splice(n, 1);
  }
  else
    card = null;

  return card;
}

//-----------------------------------------------------------------------------
// stackAdd(card): Adds the given card to the stack.
//-----------------------------------------------------------------------------

function stackAddCard(card) {
  this.cards.push(card);
}

//-----------------------------------------------------------------------------
// stackCombine(stack): Adds the cards in the given stack to the current one.
// The given stack is emptied.
//-----------------------------------------------------------------------------

function stackCombine(stack) {

  this.cards = this.cards.concat(stack.cards);
  stack.cards = new Array();
}

//-----------------------------------------------------------------------------
// stackCardCount(): Returns the number of cards currently in the stack.
//-----------------------------------------------------------------------------

function stackCardCount() {

  return this.cards.length;
}
