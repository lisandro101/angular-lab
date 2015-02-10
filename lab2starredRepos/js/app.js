'use strict';

/* App Module */

var githubApp = angular.module('gitHubApp', [
  'ngRoute',
  'ngResource',
  'gitHubControllers',
  'gitHubServices'
]);

githubApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/repos', {
        templateUrl: 'partials/repo-list.html',
        controller: 'ReposCtrl'
      }).
      // when('/repos/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // }).
      otherwise({
        redirectTo: '/repos'
      });
  }]);
