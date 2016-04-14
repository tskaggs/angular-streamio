'use strict';

/**
 * @ngdoc overview
 * @name angularstreamioApp
 * @description
 * # angularstreamioApp
 *
 * Main module of the application.
 */
angular
  .module('angularstreamioApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('public', {
        url: '',
        abstract: true,
        template: '<ui-view></ui-view>'
      })
      .state('public.main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });
