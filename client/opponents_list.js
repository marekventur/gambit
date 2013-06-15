Template.opponents_list.helpers({
	opponents: function(){
		return Players.find();	
	}
});