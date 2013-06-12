Meteor.startup(function () {
	Meteor.absoluteUrl('', {replaceLocalhost: true});
	Accounts.loginServiceConfiguration.remove(
		{service: "twitter"}	
	)
	
	Accounts.loginServiceConfiguration.insert(
		{		
			service: 		"twitter",
			consumerKey: 	"lqpNeU2AreWVQ052cQ0PCg",
			secret: 			"5BPqrGKAXVz6e0QIcATw66BU6hkkqOKf3qQpqz5Q"
		}
	)
});