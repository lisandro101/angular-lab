'use strict';

/* Controllers */

var gitHubControllers = angular.module('gitHubControllers', ['gitHubServices']);

gitHubControllers.controller('ReposCtrl', ['$scope', '$http', 'GetStarredRepoService', 'GetStatsService', 
	function($scope, $http, GetStarredRepoService, GetStatsService) {
	
	$scope.user = 'lisandro101';

	$scope.getRepoData =  function(){
		$scope.repos = GetStarredRepoService.query({userName: $scope.user}, function(repos){
			if(repos){
				angular.forEach(repos, function(repo, key){
					var stats = GetStatsService.query({userName: $scope.user, repoName: repo.name}, function(stats, key){
						if(stats){
							angular.forEach(stats, function(stat, key){
								if(stat){
									repo.total = stat.total;	
								}
							});
							
						}
					});
				});
			}
		});
	};	

	$scope.getRepoData();
}]); 