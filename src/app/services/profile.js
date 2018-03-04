angular.module('ixlayer.api.profile', ['ixlayer.useraccess'])

.factory('profileService', ['userAccessSrv', '$q', function(userAccessSrv, $q) {
    var profile = null;


    var getProfile = function() {
        if (profile) {
            return $q.when(profile);
        } else {
            return userAccessSrv.currentUser() || userAccessSrv.autoLogin();
        }
    };

    return {
        getProfile: getProfile
    };
}]);