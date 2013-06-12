Meteor.startup(function () {
	Accounts.loginServiceConfiguration.remove(
		{service: "facebook"}	
	)
	
	Accounts.loginServiceConfiguration.insert(
		{		
			service: 		"facebook",
			consumerKey: 	"304982879637523",
			secret: 			"72fde06b437b491dca9d61e916199348"
		}
	)
});