angular.module('ixlayer.api.profile', [
  'ixlayer.endpoints',
  'ixlayer.useraccess'])

  .factory('profileService', ['$q', 'profileResource', function($q, profileResource) {
    var profile = null;

    var getProfile = function() {
      if (profile) {
        return $q.when(profile);
      } else {
        return profileResource.service.one().get().then(function(result) {
          profile = result;
          return profile;
        });
      }
    };

    var updateProfile = function(data) {
      return  profileResource.service.one().customPUT(data);
    };

    return {
      getProfile: getProfile,
      updateProfile: updateProfile
    };
  }]);