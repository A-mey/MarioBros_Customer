const app = angular.module('myApp', []);
app.controller('smartCtrl', function($scope) {

    $scope.isUserLoggedin = false;
    let cookieValue = document.cookie;
    if (cookieValue && cookieValue.includes('Customer')) {
        $scope.userDetails = cookieValue.substring(9, cookieValue.length);
        $scope.isUserLoggedin = true;
    }
    // loadCategories();
    // // getProducts();


    // function loadCategories() {
    //     getRequest("", oURL.productAPI, 'getCategories')
    //         .then((data) => {
    //             if (data) {
    //                 $scope.$apply($scope.categories = data.result);
                    
    //                 console.log("categories", $scope.categories);
    //                 let defaultCategory = $scope.categories[0];
    //                 //dropdown(defaultCategory);
    //                 getProducts(defaultCategory.CategoryID);
    //             }
    //         })
    // }

    // function getProducts(CategoryID) {
    //     let oData = JSON.stringify({CategoryID: CategoryID});
    //     postRequest(oData, oURL.productAPI, 'getProducts')
    //         .then((data) => {
    //             if (data) {
    //                 $scope.$apply($scope.test = data.result);
                    
    //                 console.log("products", $scope.test);
    //             }
    //         })
    // }

    $scope.dropdown = dropdown;
    function dropdown(x) {
        //let categoryID = x.CategoryID;
        //let productList = $scope.products.filter(a => a.ParentID == categoryID);
        //$scope.$emit('sendCategory', x);
        //$rootScope.$emit('sendCategory', x);
    }

    $scope.$on('sendCategory', function(event, data) {
        console.log(data);
        $scope.$broadcast('_sendCategory', x);
    })

    // $scope.isLoginFormDisplayed = true;
    // $scope.formName = "Register";

    // $scope.openSingupModal = function() {
    //     $scope.$on('signupModal'), function (event, data) {
    //         $('#signupModal').show();
    //     };
    // }
  

    //--------------------------------------------------Login section------------------------------------

    // $scope.btnClick = btnClick;
    // function btnClick(registrationId, registrationPWD) {
    //     if (!registrationId || !registrationPWD) {
    //         notificationError("Email Id and/or password cannot be blank");
    //         return;
    //     }
    //     if (!registrationId.match($scope.emailValidator)){
    //         notificationError("Invalid Email format");
    //         return;
    //     }
    //     if (!registrationPWD.match($scope.validatePassword)) {
    //         notificationError("Your password should contain atleast one capital letter, small letter, number and a special character")
    //         return;
    //     }
    //     else {
    //     let _data = JSON.stringify({"emailId": registrationId});
    //         postRequest(_data, oURL.loginAPI, 'checkRepeatUser') //Verify if the user already exists
    //             .then((data) => {
    //                 if (data && data.result) {
    //                     alert("user already exists");
    //                 }
    //                 else {
    //                     console.log(data);
    //                     sendOTP(registrationId, registrationPWD);
    //                 }
    //             })
    //     }
    // }

    // function sendOTP(registrationId, registrationPWD) {
    //     let oData = JSON.stringify({"email": registrationId});
    //     postRequest(oData, oURL.loginAPI, 'sendOTP') //sendOTP
    //         .then((data) => {
    //             if (data && data.status) {
    //                 console.log(data);
    //                 $("#OTP-modal").show();
    //                 $scope.registrationId = registrationId;
    //                 $scope.registrationPWD = registrationPWD;
    //             }
    //             else {
    //                 notificationError("something went wrong");
    //             }
    //         })
    // }

    // $scope.verifyOTP = verifyOTP;
    // function verifyOTP(OTP) {
    //     let registrationId = $scope.registrationId;
    //     let registrationPWD = $scope.registrationPWD;
    //     // let otp = $scope.OTP;
    //     let oData = JSON.stringify({"email": registrationId, "otp": OTP})
    //     postRequest(oData, oURL.loginAPI, 'verifyOTP') //verifyOTP
    //         .then((data) => {
    //             if (data && data.result) {
    //                 if (data.result) {
    //                     createUser(registrationId, registrationPWD);
    //                 }
    //                 else {
    //                     notificationError("Incorrect OTP");
    //                 }
    //             }
    //         })
    // }

    // function createUser(registrationId, registrationPWD) {
    //     let credentials = encrypt(registrationId, registrationPWD);
    //     postRequest(credentials, oURL.loginAPI, 'newUser') //register the user
    //         .then((data) => {
    //             if (data) {
    //                 alert("Registered successfully");
    //                 $("#OTP-modal").hide();
    //                 $scope.isLoginFormDisplayed = true;
    //                 $scope.formName = "Register";
    //             }
    //             else {

    //             }
    //         })
    // }

    // $scope.loginFormRedirect = loginFormRedirect;
    // function loginFormRedirect() {
    //     $scope.isLoginFormDisplayed = !$scope.isLoginFormDisplayed;
    //     $scope.formName = ( !$scope.isLoginFormDisplayed )? "Login":"Register";
    // }

    // $scope.login = login;
    // function login(loginId, loginPWD) {
    //     //check if user exists
    //     let _emailObj = JSON.stringify({"emailId": loginId});
    //     postRequest(_emailObj, oURL.loginAPI, 'checkRepeatUser') //Verify if the user already exists
    //                 .then((data) => {
    //                     if (data && data.result) {
    //                         console.log(data);
    //                         notificationError("No such user exists");
    //                     }
    //                     else {
    //                         console.log(data);
    //                         //login
    //                         let oData = getCredentials(loginId, loginPWD);
    //                         postRequest(oData, oURL.loginAPI, 'loginUser')
    //                             .then((_data) => {
    //                                 if (_data && _data.result) {
    //                                     _data = JSON.stringify(_data.result);
    //                                     // notificationSuccess("Logged in successfully");
    //                                     document.cookie = `Customer=${_data}`;
    //                                     location.reload();
    //                                 }
    //                                 else {
    //                                     notificationError("something went wrong");
    //                                 }
    //                             })
    //                     }
    //                 })
    // }

    // function logout() {
        
    // }
    
    //--------------------------------------------------Login section end------------------------------------
    

    // $scope.dropdown = dropdown;
    // function dropdown(service, $event) {
    //     $scope.service = service;
    //     if ($scope.service){
    //         $('#subservicesmenu').show();
    //     }
    // }

    // $scope.popup = popup;
    // function popup(subservice, $event) {
    //     $scope.subservice = subservice;
    //     if ($scope.subservice) {
    //         $('#scheduler').show();
    //     }
    // }

    // $scope.submitTime = submitTime;
    // function submitTime() {
    //     $scope.dateTime = $scope.dateTime.toString();
    //     $('#confirm-modal').show();
    // }

    // $scope.confirmOrder = confirmOrder;
    // function confirmOrder() {
    //     let oData = JSON.stringify({'service': $scope.service, 'description': $scope.subservice,'dateTime': dateTime});
    //     postRequest(oData, oURL.loginAPI, 'confirmOrder')
    //         .then((data) => {
    //             if (data) {
    //                 console.log("Your request has been placed successfully");
    //             }
    //             else {
    //                 console.log("Unable to place your request");
    //             }
    //         })
    // }

    // $scope.cancelOrder = cancelOrder;
    // function cancelOrder() {
    //     $('#confirm-modal').hide();
    // }
});