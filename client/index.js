Template.user_loggedout.events({
	"click #login": function (e, tmpl) {
		Meteor.loginWithTwitter({
			requestPermissions: ['user','read']
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