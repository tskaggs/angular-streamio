'use strict';

/**
 * @ngdoc service
 * @name angularstreamioApp.user
 * @description
 * # user
 * Service in the angularstreamioApp.
 */
angular.module('angularstreamioApp')
  .service('user', function ($http) {
    return {
	    post: function(payload) {
	    	console.log('payload', payload);
	    	return $http.post('http://localhost:1337/user/useraction', payload);
	  	},

	  	get: function() {
	    	return $http.get('http://localhost:1337/user/userget');
	  	}
	};
  });
