/**
 * Created by pavel on 9/17/16.
 */
angular.module('userModule').component('userDetail', {
    templateUrl: 'app/user/template/user-detail.template.html',
    controller:['$routeParams', '$location', 'User', function UserDetaiController ($routeParams, $location, User) {
        var _this = this;
        _this.user = {};
        if ($routeParams.userId){
            User.get({userId: $routeParams.userId}, function(result) {
                _this.UserProxy = result;
                _this.user = result.user;
            });
        }
        _this.save = function (form) {
            if(form.$valid) {
                if(_this.user._id) {
                    User.update({}, _this.user, function () {
                        $location.path('/users')
                    }, function (error) {
                        console.log(error);
                    });
                } else {
                    User.save({}, _this.user, function () {
                        $location.path('/users')
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        };
    }]
});