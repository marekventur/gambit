Accounts.onCreateUser(function(options,user) {
		var accessToken = user.services.twitter.accessToken,
			result,
			profile;
		
		result = Meteor.http.get("https://api.twitter.com/1/account/verify_credentials.json", {
				requestPermissions: ['user', 'read']
			});
		
		if(result.error)
			throw result.error;
			
		profile = _.pick(result.data,
					"screen_name"
					// ,"" picture please
					// ,"" age preferably
					);
	});