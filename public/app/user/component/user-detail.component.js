/**
 * Created by pavel on 9/17/16.
 */
(() => {
    angular.module('userModule').component('userDetail', {
        templateUrl: 'app/user/template/user-detail.template.html',
        controller:['$routeParams', '$location', 'User', function UserDetaiController ($routeParams, $location, User) {
            var vm = this;
            vm.user = {};
            if ($routeParams.userId){
                User.get({userId: $routeParams.userId}, function(result) {
                    vm.UserProxy = result;
                    vm.user = result.user;
                });
            }
            vm.save = function (form) {
                if(form.$valid) {
                    if(vm.user._id) {
                        User.update({}, vm.user, function () {
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
        }]
    });    
})();
