Template.user_loggedout.events({
	"click #login": function (e, tmpl) {
		Meteor.loginWithFacebook({
			requestPermissions: ['name']
		}, function(err) {
				if (err) {
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