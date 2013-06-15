test( "create stack empty", function() {
	var stack = new Stack();
  equal( stack.cardCount(), 0 );
});

test( "create stack", function() {
	var stack = new Stack();
	stack.makeDeck(3)
  equal( stack.cardCount(), 156);
});

test( "deal", function() {
	var stack = new Stack();
	stack.makeDeck(1);
	equal( stack.cardCount(), 52);
	var card = stack.deal();
	equal( card.rank, 'A');
	equal( card.suit, 'C');
	equal( stack.cardCount(), 51);
});

test( "shuffle", function() {
	var stack = new Stack();
	stack.makeDeck(1)
	stack.shuffle();
  equal( stack.cardCount(), 52);
});

test( "toString", function() {
	equal( new Card('A', 'C').toString(), 'A ♣');
	equal( new Card('J', 'D').toString(), 'J ♦');
	equal( new Card('Q', 'H').toString(), 'Q ♥');
	equal( new Card('3', 'S').toString(), '3 ♠');
});