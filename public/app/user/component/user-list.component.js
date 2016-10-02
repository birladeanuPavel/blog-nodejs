/**
 * Created by pavel on 9/17/16.
 */
(() => {
    angular.module('userModule').component('userList', {
        templateUrl: 'app/user/template/user-list.template.html',
        controller:['User', function UserListController(User) {
            var vm = this;
            User.get({}, function (usersPromise) {
                vm.users = usersPromise.users;
            });

            vm.delete = function (id) {
                User.delete({userId: id}, function (success) {
                    vm.users = vm.users.filter(function (user) {
                        return user._id != id;
                    })
                });
            };
        }]
    });    
})();
