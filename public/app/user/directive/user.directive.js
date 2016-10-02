/**
 * Created by pavel on 9/19/16.
 */
(() => {
    angular.module('userModule').directive('validPassword', function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                var vm = scope;
                ctrl.$parsers.unshift(function (viewValue) {
                    var noMatch = viewValue != vm.$ctrl.user.password;
                    ctrl.$setValidity('noMatch', !noMatch);
                    return !noMatch;
                })
            }
        }
    });    
});
