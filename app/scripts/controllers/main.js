'use strict';

/**
 * @ngdoc function
 * @name angularstreamioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularstreamioApp
 */

angular.module('angularstreamioApp')
  .controller('MainCtrl', function ($scope, user) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.userPost = function(payload) {
    	user.post(payload)
        .success(function (payload, status) {
        	console.log('post success', payload, status);
        	$scope.userGet();
        })
        .error(function (error, status) {
          	console.log('post failure', error, status);
        });
    };

    $scope.userGet = function() {
    	user.get()
        .success(function (payload, status) {
        	console.log('post success', payload, status);
        	$scope.feed = payload;
        })
        .error(function (error, status) {
          	console.log('post failure', error, status);
        });
    };


    $scope.userGet();



  });
