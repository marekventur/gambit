Meteor.startup(function () {
	//Players.remove({});

	if (Players.find().count() === 0){
		Players.insert({	
			gameId: 1, 	
			name: "Dan",
			email: "dan@gamevy.com",
			cards: [new Card("10", "C"), new Card("J", "C")]
		});
		
		Players.insert({	
			gameId: 1, 
			name: "Paul",
			email: "paul@gamevy.com",
			cards: [new Card("Q", "C"), new Card("5", "C")]
		});
		
		Players.insert({	
			gameId: 1, 
			name: "Helen",
			email: "helen@gamevy.com",
			cards: [new Card("3", "C"), new Card("7", "C"), new Card("2", "C"), new Card("5", "C")]
		});
		
		Players.insert({	
			gameId: 1,
			name: "Graham",
			email: "graham@gamevy.com",
			cards: [new Card("A", "C"), new Card("3", "C"), new Card("9", "C"), new Card("4", "C")]
		});
		
		Players.insert({	
			gameId: 2,		
			name: "Bill",
			email: "bill@gamevy.com",
			cards: [new Card("10", "C"), new Card("A", "C")]
		});
		
		Players.insert({	
			gameId: 2,		
			name: "Ben",
			email: "ben@gamevy.com",
			cards: [new Card("K", "C"), new Card("A", "C")]
		});
		
		Players.insert({	
			gameId: 3,		
			name: "Julian",
			email: "julian@gamevy.com",
			cards: [new Card("5", "C"), new Card("3", "D"), new Card("7", "S")]
		});
		
		Players.insert({	
			gameId: 3,		
			name: "Dick",
			email: "dick@gamevy.com",
			cards: [new Card("10", "H"), new Card("2", "C"), new Card("5", "D")]
		});
		
		Players.insert({	
			gameId: 3,		
			name: "George",
			email: "george@gamevy.com",
			cards: [new Card("8", "D"), new Card("A", "D"), new Card("6", "C")]
		});
		
		Players.insert({	
			gameId: 3,		
			name: "Anne",
			email: "anne@gamevy.com",
			cards: [new Card("2", "S"), new Card("7", "H"), new Card("J", "C")]
		});
		
		Players.insert({	
			gameId: 3,		
			name: "Timmy",
			email: "timmy@gamevy.com",
			cards: [new Card("Q", "C"), new Card("5", "H")]
		});
		
		Games.insert({
			createdBy: "Dan"	
		});
	}
});