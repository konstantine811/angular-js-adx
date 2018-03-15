angular.module( 'ixLayer.verifyEmail', [
    'ixlayer.useraccess',
    'ui.router',
    'ui.bootstrap'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'verify_email', {
            url: '/verify-email/:activation_key',
            controller: 'VerifyEmailCtrl',
            templateUrl: 'components/verify_email/verify_email.tpl.html',
            data:{ pageTitle: 'verifyEmail' }
        });
    })

    .controller( 'VerifyEmailCtrl', ['$scope', '$stateParams', 'userAccessSrv', function VerifyEmailCtrl( $scope, $stateParams, userAccessSrv ) {
        $scope.complete = false;

        userAccessSrv.verifyEmail($stateParams.activation_key).then(function (result) {
           $scope.complete = true;
        }, function (error) {

        });
    }]);
