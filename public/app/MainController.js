ddayApp.controller('MainController', 
	[ 		'$scope', '$rootScope', '$state','ngProgress','Restangular',
	function($scope,   $rootScope,   $state, ngProgress, Restangular){

		// $scope.$on('$stateProvider', function(event, toState, toParams, fromState, fromParams){
		// 	ngProgressLite.start();
		// })
		
		$scope.MainCtrl = function() {
           // $scope.progressbar.start();
           alert()
		}

		// Restangular.one('users/show-user').get().then(function(data){
		// 	//if(data.resource.user_data){
		// 		$rootScope.currentUser = data.resource.user_data;
		// 	//}
		// })

}]);