
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/addevent", {
		
        templateUrl : "views/addevent.html",
		controller   : 'formcontroller',
		controllerAs : 'eventCtl'
    })
  .when("/manageevent", {
		
        templateUrl : "views/manageevent.html",
		controller   : 'managecontroller',
		controllerAs : 'managectrl'
    })
   
    .otherwise({
        templateUrl : "views/404.html"
    })
   
});
app.run(['$rootScope',function($rootScope){
	$rootScope.event=[];
}]);
app.controller('formcontroller',['eventFactory',function(eventFactory){
	
	this.event=eventFactory.getAllEvents();
	this.specialtype=[{name:'Age Restricted',checked:false},{name:'Luxury',checked:false}];
	this.categories=[{id:1,name:'music'},{id:2,name:'cinema'},{id:3,name:'Games'},{id:4,name:'Special category'}];
	this.submitForm=function(form){
		eventFactory.createEvent(angular.copy(form),this.event);
		//$scope.event.push(form);
		//console.log(this.event);
		alert("event added successfully ");
		
	}
	
	
}]);

app.controller('managecontroller',['eventFactory',function(eventFactory){
	
	this.eventList=eventFactory.getAllEvents();
		console.log(this.eventList);
	
	
	
}]);

