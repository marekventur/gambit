Meteor.publish("players", function(gameId){
	return Players.find({gameId: gameId});
});

Meteor.publish("games", function(){
	return Games.find();
});