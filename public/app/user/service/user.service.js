/**
 * Created by pavel on 9/17/16.
 */
(() => {
    'use strict';
    angular.module('userModule')
        .factory('User', ['$resource', User]);

    function User ($resource) {
        return $resource('/api/v1/users/:userId', {}, {
            update: {
                method: 'PUT'
            }
        });
    }
})();
