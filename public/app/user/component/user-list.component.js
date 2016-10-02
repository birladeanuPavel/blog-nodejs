/**
 * Created by pavel on 9/17/16.
 */
(() => {
    'use strict';
    angular.module('userModule').component('userList', {
        templateUrl: 'app/user/template/user-list.template.html',
        controller:['User', '$location', UserListController]
    });

    function UserListController(User, $location) {
        var vm = this;
        User.get({}, function (usersPromise) {
            vm.users = usersPromise.users;
        });

        vm.delete = function (id) {
            User.delete({userId: id}, function onSuccess (response) {
                if(response.success){
                    vm.users = vm.users.filter(function (user) {
                        return user._id != id;
                    });
                } else {
                    $location.path("/login");
                }
            });
        };
    }
})();
