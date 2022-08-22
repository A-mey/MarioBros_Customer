app.controller('header', function($scope) {
    $scope.navlist = ['Register as an associate', 'Home'];
    let cookieValue = document.cookie;
    if (cookieValue && cookieValue.includes('Customer')) {
        $scope.userDetails = JSON.parse(cookieValue.substring(9, cookieValue.length));
        $scope.isUserLoggedin = true;
        $scope.firstName = $scope.userDetails.FirstName;
    }
    $scope.openSignupModal = function() {
        $('#signupModal').show();
        $scope.$emit('signupModal', '');
    }
})