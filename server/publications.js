Meteor.publish("players", function(){
	return Players.find({gameId: 3});
});