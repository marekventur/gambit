var Router = Backbone.Router.extend({
  routes: {
    "":                 "home", 
    "game/:gameId":     "game"  
  },

  home: function() {
    Session.set('currentPage', 'home');
  },

  game: function(gameId) {
    Session.set('currentPage', 'game');
    Session.set('gameId',      gameId);
  },
});

var app = new Router;

Meteor.startup(function () {
  Backbone.history.start({pushState: true});
});