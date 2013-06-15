if (Players.find().count() === 0){
	Players.insert({	
		gameId: 1, 	
		name: "Dan",
		email: "dan@gamevy.com",
		cards: ["10","J"]
	});
	
	Players.insert({	
		gameId: 1, 
		name: "Paul",
		email: "paul@gamevy.com",
		cards: ["Q","5"]
	});
	
	Players.insert({	
		gameId: 1, 
		name: "Helen",
		email: "helen@gamevy.com",
		cards: ["3","7","2","5"]
	});
	
	Players.insert({	
		gameId: 1,
		name: "Graham",
		email: "graham@gamevy.com",
		cards: ["A","3","9","4"]
	});
	
	Players.insert({	
		gameId: 2,		
		name: "Bill",
		email: "bill@gamevy.com",
		cards: ["10", "A"]
	});
	
	Players.insert({	
		gameId: 2,		
		name: "Ben",
		email: "ben@gamevy.com",
		cards: ["K", "A"]
	});
	
	Players.insert({	
		gameId: 3,		
		name: "Julian",
		email: "julian@gamevy.com",
		cards: ["5", "3", "7"]
	});
	
	Players.insert({	
		gameId: 3,		
		name: "Dick",
		email: "dick@gamevy.com",
		cards: ["10", "2", "5"]
	});
	
	Players.insert({	
		gameId: 3,		
		name: "George",
		email: "george@gamevy.com",
		cards: ["8", "A", "6"]
	});
	
	Players.insert({	
		gameId: 3,		
		name: "Anne",
		email: "anne@gamevy.com",
		cards: ["2", "7", "J"]
	});
	
	Players.insert({	
		gameId: 3,		
		name: "Timmy",
		email: "timmy@gamevy.com",
		cards: ["Q", "5",]
	});
	
	Games.insert({
		createdBy: "Dan"	
	});
}