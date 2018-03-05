angular.module('ixlayer.api.profile', ['ixlayer.useraccess','restangular',
    'ixlayer.djangoAuth'])

.factory('profileService', ['Restangular', 'userAccessSrv', '$q', 'djangoAuth', function(Restangular, userAccessSrv, $q, djangoAuth) {
    var profile = null;

    var initURL = function () {
        return djangoAuth.initialize(restAPIBaseUrl, false);
    };

    var getProfile = function() {
        if (profile) {
            return $q.when(profile);
        } else {
            return userAccessSrv.currentUser() || userAccessSrv.autoLogin();
        }
    };

    var updateProfile = function(data) {
        if(data) {
            return initURL().then(function () {
                return  djangoAuth.updateProfile(data);
            });
        }
    };

    return {
        getProfile: getProfile,
        updateProfile: updateProfile
    };
}]);