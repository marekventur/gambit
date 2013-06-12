Accounts.onCreateUser(function(options,user) {
		var accessToken = user.services.facebook.accessToken,
			result,
			profile;
		
		result = Meteor.http.get("https://graph.facebook.com/me?fields=picture");
		
		if(result.error)
			throw result.error;
			
		profile = _.pick(result.data,
					"name",
					"picture",
					"user_birthday");
	});