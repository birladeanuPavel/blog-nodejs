/**
 * Created by pavel on 9/17/16.
 */
(() => {
    'use strict';
    angular.module('userModule').component('userDetail', {
        templateUrl: 'app/user/template/user-detail.template.html',
        controller:['$routeParams', '$location', 'User', UserDetailController]
    });

    function UserDetailController ($routeParams, $location, User) {
        var vm = this;
        vm.user = {};
        if ($routeParams.userId){
            console.log(sessionStorage.getItem("token"))
            User.get({userId: $routeParams.userId}, function(response) {
                if (response.success) {
                    vm.UserProxy = response;
                    vm.user = response.user;
                } else {
                    $location.path("/login");
                }
            });
        }
        vm.save = function (form) {
            if(form.$valid) {
                if(vm.user._id) {
                    User.update({userId: vm.user._id}, vm.user, function () {
                        $location.path('/users')
                    }, function (error) {
                        console.log(error);
                    });
                } else {
                    User.save({}, vm.user, function () {
                        $location.path('/users')
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        };
    }
})();
