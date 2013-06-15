Meteor.publish("players", function(){
	return Players.find({gameId: 3});
});

Meteor.publish("games", function(){
	return Games.find();
});