angular.module("app").controller("activityController", function($scope, $state, activityService) {
	
	$scope.getActivity = function() {
		
		activityService.getActivity()
			.then(function(data) {
				
				$scope.dataPoints = data.data;
			});
	};
	
	$scope.getActivity();
	
	$scope.like = function(data, index) {
		
		$scope.dataPoints[index].activity_likes += 1;
		data.disabled = true;
		console.log(data);
	}
	
	$scope.reply = function(data, index) {
		
		data.userReply = true;
	}
	
	$scope.replySubmit = function(data, index) {
		
		console.log(data.replyText);
		alert("REPLY SUBMITTED");
		data.replyText = "";
		data.userReply = false;
	}
	
	$scope.limit = 10;
	
	$scope.loadMore = function() {
		
		if ($scope.limit < $scope.dataPoints.length) {
			
			$scope.limit += 20;
		}
	};
	
});