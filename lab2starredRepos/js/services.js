'use strict';

/* Services */

var gitHubServices = angular.module('gitHubServices', ['ngResource']);

gitHubServices.factory('GitHubRepoService', ['$resource',
  function($resource){
    return $resource('https://api.github.com/users/:userName/starred', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);