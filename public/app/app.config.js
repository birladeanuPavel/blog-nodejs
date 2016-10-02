angular.module("blogModule").config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/users', {
            template: '<user-list></user-list>'
        }).
        when('/userDetail/:userId', {
            template: '<user-detail></user-detail>'
        }).
        when('/userDetail', {
            template: '<user-detail></user-detail>'
        }).
        otherwise('/');
    }
]);