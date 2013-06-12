function addCardToPlayersHand(player,nextCard)	{

	var playersHandSelector	= "#" + player + "-hand";
	var cardCount 		= $(playersHandSelector + " > div").size() + 1;
	

	var container = $( playersHandSelector );

	container.append($("<div />")
				.addClass("card")
				.attr("id", "card" + cardCount)
				.text(nextCard.text())
	);

	nextCard.text("");
}
