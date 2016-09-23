/**
 * Created by pavel on 9/17/16.
 */
userModule.factory('User', ['$resource',
    function ($resource) {
        return $resource('/api/v1/users/:userId', {}, {
            update: {
                method: 'PUT'
            }
        });
    }
]);