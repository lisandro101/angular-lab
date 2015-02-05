'use strict';

/* Controllers */

var githubRepoApp = angular.module('githubReposApp', []);

githubRepoApp.controller('ReposCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('https://api.github.com/users/lisandro101/starred').success(function(data) {
    $scope.repos = data;
  });
}]);