angular.module("app", ["ui.router"]).config(function($urlRouterProvider, $stateProvider) {
	
	$stateProvider
	
		.state("activity", {
			url: "/activity",
			templateUrl: "features/activity/activity.template.html",
			controller: "activityController"
		})
		
		$urlRouterProvider.otherwise("/activity");
});