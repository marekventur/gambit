Players = new Meteor.Collection("players", {
	// Transform from pure JSON to Objects
	transform: function(player) {
		for(var i=0, len=player.cards.length; i < len; i++){
			player.cards[i] = cardFromJson(player.cards[i]);
		}
		return player;
	}
});