/**
 * Created by pavel on 10/2/16.
 */
(() => {
    'use strict';
    angular.module('userModule').component('userLogin', {
        templateUrl: 'app/user/template/user-login.template.html',
        controller:['$routeParams', '$location', 'User', UserLoginController]
    });

    function UserLoginController ($routeParams, $location, User) {
        var vm = this;
        vm.user = {};
        vm.login = function (form) {
            if(form.$valid) {
                User.login({}, vm.user);
            }
        };
    }
})();