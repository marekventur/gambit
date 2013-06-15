Meteor.subscribe("players", Session.get('gameId'));

Template.opponents_list.helpers({
	opponents: function(){
		return Players.find();	
	}
});