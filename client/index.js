Cards = new Meteor.Collection("cards");

Template.user_loggedout.events({
	"click #login": function (e, tmpl) {
		Meteor.loginWithTwitter({
			requestPermissions: ['screen_name','profile_image_url']
		}, function(err) {
				if (err) {
					alert(err);
				} else {
				}
			});
	}	
});

Template.user_loggedin.events({
	"click #logout": function (e, tmpl) {
		Meteor.logout(function(err) {
				if (err) {
				} else {
				}
			});
	}	
});