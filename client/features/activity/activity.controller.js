angular.module("app").controller("activityController", function($scope, $state, activityService) {
	
	$scope.getActivity = function() {
		
		activityService.getActivity()
			.then(function(data) {
				
				$scope.dataPoints = data.data;
				//$scope.avatars = data.data.actor_avator;
				//$scope.usernames = data.data.actor_username;
				//$scope.likes = data.data.activity_likes;
				//$scope.shares = data.data.activity_shares;
				//$scope.comments = data.data.activity_comments;
				//$scope.urls = data.data.actor_url;
				//$scope.providers = data.data.provider;
				$scope.messages = data.data.activity_message;
				$scope.dates = data.data.activity_date;
						
			});
	};
	
	$scope.getActivity();
	
	$scope.limit = 10;
	
	$scope.loadMore = function() {
		
		if ($scope.limit < $scope.dataPoints.length) {
			
			$scope.limit += 20;
		}
	};
	
});