Handlebars.registerHelper('isRoute',function(routeName){
    return Session.get('currentPage') == routeName;
});