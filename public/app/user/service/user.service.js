/**
 * Created by pavel on 9/17/16.
 */
(() => {
    'use strict';
    const ERROR_STATUS_FORBIDDEN = 403,
        STATUS_OK = 200,
        USER_RESOURCE = '/api/v1/users';

    angular.module('userModule')
        .factory('User', ['$resource', '$location', User]);

    function User($resource, $location) {
        return (token) => {
            return $resource(USER_RESOURCE + '/:userId', {}, {
                save: {
                    method: 'POST',
                    interceptor: {
                        response: modifyHandler,
                        responseError: genericErrorHandler
                    }
                },
                update: {
                    method: 'PUT',
                    headers: {'x-access-token': token},
                    interceptor: {
                        responseE: modifyHandler,
                        responseError: genericErrorHandler
                    }
                },
                delete: {
                    method: 'DELETE',
                    headers: {'x-access-token': token}
                },
                get: {
                    method: "GET",
                    headers: {'x-access-token': token},
                    interceptor: {
                        responseError: genericErrorHandler
                    }
                },
                login: {
                    method: 'POST',
                    url: USER_RESOURCE + "/login",
                    interceptor: {
                        response: modifyHandler,
                        responseError: genericErrorHandler
                    }
                }
            });
            
            function modifyHandler(response) {
                if (response.status === STATUS_OK) {
                    localStorage.setItem('token', response.data.token);
                    $location.path('/users');
                }
            }

            function genericErrorHandler(error) {
                if (error.status === ERROR_STATUS_FORBIDDEN) {
                    $location.path('/login');
                }
            }
        }
    }
})();
