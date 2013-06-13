Cards = new Meteor.Collection("cards");

Template.user_loggedout.events({
	"click #login": function(){}
});

Template.user_loggedin.events({
	"click #logout": {}
});