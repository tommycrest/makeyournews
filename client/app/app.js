'use strict';

angular.module('makeyournewsApp', [
  'makeyournewsApp.auth',
  'makeyournewsApp.admin',
  'makeyournewsApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'LocalStorageModule'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
        .otherwise('/');

    $locationProvider.html5Mode(true);
    
  });
