'use strict';

/* Controllers */

var githubRepoApp = angular.module('githubReposApp', ['gitHubServices']);

githubRepoApp.controller('ReposCtrl', ['$scope', '$http', 'GitHubRepoService', function($scope, $http, GitHubRepoService) {
	$scope.user = 'lisandro101';
	
	$scope.getRepoData =  function(){
		$scope.repos = GitHubRepoService.query({userName: $scope.user});
	};

	$scope.getRepoData();
}]); 