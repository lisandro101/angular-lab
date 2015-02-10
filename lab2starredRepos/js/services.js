'use strict';

/* Services */

var gitHubServices = angular.module('gitHubServices', ['ngResource']);

gitHubServices.factory('GetStarredRepoService', ['$resource',
  function($resource){
    return $resource('https://api.github.com/users/:userName/starred', {}, {
      query: {method:'GET', params:{access_token:'220c9b9bdbbc654d28aee0b1bfba0c8f90f65de5', auth: 'basic'}, isArray:true}
    });
  }]);

gitHubServices.factory('GetStatsService', ['$resource',
  function($resource){
    return $resource('https://api.github.com/repos/:userName/:repoName/stats/contributors', {}, {
      query: {method:'GET', params:{access_token:'220c9b9bdbbc654d28aee0b1bfba0c8f90f65de5', auth: 'basic'}, isArray:true}
    });
}]);