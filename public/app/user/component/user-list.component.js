/**
 * Created by pavel on 9/17/16.
 */
angular.module('userModule').component('userList', {
    templateUrl: 'app/user/template/user-list.template.html',
    controller:['User', function UserListController(User) {
        var _this = this;
        User.get({}, function (usersPromise) {
            _this.users = usersPromise.users;
        });

        _this.delete = function (id) {
            User.delete({userId: id}, function (success) {
                _this.users = _this.users.filter(function (user) {
                    return user._id != id;
                })
            });
        };
    }]
});