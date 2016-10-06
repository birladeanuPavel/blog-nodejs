/**
 * Created by pavel on 10/5/16.
 */
(() => {
    'use strict';
    angular.module('userModule')
        .controller('MainController', ['$rootScope', MainController]);

    function MainController($rootScope) {
        var vm = this;
        $rootScope.logged = !!localStorage.getItem('token');
        vm.logout = logout;
        
        function logout() {
            localStorage.removeItem('token');
            $rootScope.logged = false;
        }
    }
})();