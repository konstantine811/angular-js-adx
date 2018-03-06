angular.module('ixLayer.profile').controller('ProfileEditCtrl', ['$scope', 'userInfo', 'profileService', function ProfileEditCtrl($scope, userInfo, profileService) {
 $scope.user = userInfo.user;

 $scope.submitForm = function(user) {
     var data = {
         user: user
     };
     console.log(data);
     profileService.updateProfile(data).then(function(result) {
         console.log(result);
     });
 };
}]);