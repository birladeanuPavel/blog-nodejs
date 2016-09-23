/**
 * Created by pavel on 9/19/16.
 */
userModule.directive('validPassword', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.$ctrl.user.password;
                ctrl.$setValidity('noMatch', !noMatch);
                return !noMatch;
            })
        }
    }
});