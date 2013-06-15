Template.game_room.helpers({
	game: function(){
		var gameId = Session.get('gameId');
		return Games.findOne({_id: gameId});	
	}
});