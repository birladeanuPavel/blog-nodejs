/**
 * Created by pavel on 10/2/16.
 */
(() => {
    'use strict';
    angular.module('userModule').component('userLogin', {
        templateUrl: 'app/user/template/user-login.template.html',
        controller:['$rootScope', 'User', UserLoginController]
    });

    function UserLoginController ($rootScope, User) {
        var vm = this;
        vm.user = {};
        vm.login = function (form) {
            if(form.$valid) {
                User(localStorage.getItem("token")).login({}, vm.user);
                $rootScope.logged = true;
            }
        };
    }
})();