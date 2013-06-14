var opponentsData = [
	{	
		userId: "1",
		userName: "Dan",
		cards: ["10","J"]
	},
	{	
		userId: "2",
		userName: "Paul",
		cards: ["Q","5"]
	},
	{	
		userId: "3",
		userName: "Helen",
		cards: ["3","7","2","5"]
	}
];

Template.opponents_list.helpers({
	opponents: opponentsData
});