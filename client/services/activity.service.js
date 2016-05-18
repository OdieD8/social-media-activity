angular.module("app").service("activityService", function($http, $state) {
	
	this.getActivity = function() {
		
		return $http.get("https://nuvi-challenge.herokuapp.com/activities")
			.then(function(response) {
				
				return response;
			}, function(error) {
				
				alert("Error retrieving activity data");
				return(error);
			});
	};
});