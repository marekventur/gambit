Cards = new Meteor.Collection("cards");

Template.competitor_view.userName = function () {
	return displayPlayersName(this);
};