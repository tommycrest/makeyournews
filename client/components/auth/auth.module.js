'use strict';

angular.module('makeyournewsApp.auth', [
  'makeyournewsApp.constants',
  'makeyournewsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
