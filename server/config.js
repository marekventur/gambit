Meteor.absoluteUrl(replaceLocalhost=true); 
Meteor.startup(function () {
	Accounts.loginServiceConfiguration.remove(
		{service: {$in: ["twitter","facebook"]}}	
	)
	
	Accounts.loginServiceConfiguration.insert(
		{		
			service: "twitter",
			consumerKey: "lqpNeU2AreWVQ052cQ0PCg",
			secret: "5BPqrGKAXVz6e0QIcATw66BU6hkkqOKf3qQpqz5Q"
		}
	)
	
});