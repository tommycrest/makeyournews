'use strict';

angular.module('makeyournewsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('feed', {
        url: '/feed',
        template: '<feed></feed>'
      });
  });
