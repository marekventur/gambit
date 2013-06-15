Meteor.startup(function () {
	//Players.remove({});
	//Games.remove({});

	if (Games.find().count() === 0){
		Games.insert({
			createdBy: "Dan"	
		});
		Games.insert({
			createdBy: "Marek"	
		});
	}

	if (Players.find().count() === 0){
		var dansGameId = Games.findOne({'createdBy': 'Dan'})._id;
		var mareksGameId = Games.findOne({'createdBy': 'Marek'})._id;

		Players.insert({	
			gameId: dansGameId, 	
			name: "Dan",
			email: "dan@gamevy.com",
			cards: [new Card("10", "C"), new Card("J", "C")]
		});
		
		Players.insert({	
			gameId: dansGameId, 
			name: "Paul",
			email: "paul@gamevy.com",
			cards: [new Card("Q", "C"), new Card("5", "C")]
		});
		
		Players.insert({	
			gameId: dansGameId, 
			name: "Helen",
			email: "helen@gamevy.com",
			cards: [new Card("3", "C"), new Card("7", "C"), new Card("2", "C"), new Card("5", "C")]
		});
		
		Players.insert({	
			gameId: dansGameId,
			name: "Graham",
			email: "graham@gamevy.com",
			cards: [new Card("A", "C"), new Card("3", "C"), new Card("9", "C"), new Card("4", "C")]
		});
		
		Players.insert({	
			gameId: mareksGameId,		
			name: "Bill",
			email: "bill@gamevy.com",
			cards: [new Card("10", "C"), new Card("A", "C")]
		});
		
		Players.insert({	
			gameId: mareksGameId,		
			name: "Ben",
			email: "ben@gamevy.com",
			cards: [new Card("K", "C"), new Card("A", "C")]
		});
		
		Players.insert({	
			gameId: mareksGameId,		
			name: "Julian",
			email: "julian@gamevy.com",
			cards: [new Card("5", "C"), new Card("3", "D"), new Card("7", "S")]
		});
		
		Players.insert({	
			gameId: mareksGameId,		
			name: "Dick",
			email: "dick@gamevy.com",
			cards: [new Card("10", "H"), new Card("2", "C"), new Card("5", "D")]
		});
		
		Players.insert({	
			gameId: mareksGameId,		
			name: "George",
			email: "george@gamevy.com",
			cards: [new Card("8", "D"), new Card("A", "D"), new Card("6", "C")]
		});
		
		Players.insert({	
			gameId: mareksGameId,		
			name: "Anne",
			email: "anne@gamevy.com",
			cards: [new Card("2", "S"), new Card("7", "H"), new Card("J", "C")]
		});
		
		Players.insert({	
			gameId: mareksGameId,		
			name: "Timmy",
			email: "timmy@gamevy.com",
			cards: [new Card("Q", "C"), new Card("5", "H")]
		});
		
		
	}
}); 