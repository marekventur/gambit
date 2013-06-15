Template.opponents_list.helpers({
	opponents: function(){
		Meteor.subscribe("players", Session.get('gameId'));
		return Players.find();	
	}
});