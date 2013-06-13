Accounts.onCreateUser(function(options,user) {
		var accessToken = user.services.twitter.accessToken,
			result,
			profile;
			
		result = Meteor.http.get("https://api.twitter.com/1.1/users/show.json", {
			params: {
				access_token: accessToken			
			}
		});
		
		if (result.error)
			throw result.error;
		
		profile = _.pick(result.data,
		"screenName"
		,"profile_image_url");
		
		user.profile = profile;
		
		return user;
});