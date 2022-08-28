app.controller('signup', function($scope) {
    $scope.emailValidator = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
    $scope.validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;

    // $scope.isUserLoggedin = false;
    // let cookieValue = document.cookie;
    // if (cookieValue && cookieValue.includes('Customer')) {
    //     $scope.userDetails = cookieValue.substring(9, cookieValue.length);
    //     $scope.isUserLoggedin = true;
    // }

    $scope.isLoginFormDisplayed = true;
    $scope.formName = "Register";

    //--------------------------------------------------Login section------------------------------------

    $scope.btnClick = btnClick;
    function btnClick(registrationfirstName, registrationLastName, registrationPhoneNo, registrationId, registrationPWD, registrationPWD2) {
        if (registrationPWD != registrationPWD2) {
            notificationError("Passwords do not match");
            return;
        }
        if (!registrationId || !registrationPWD) {
            notificationError("Email Id and/or password cannot be blank");
            return;
        }
        if (!registrationfirstName || !registrationLastName) {
            return;
        }
        if (!registrationId.match($scope.emailValidator)){
            notificationError("Invalid Email format");
            return;
        }
        if (!registrationPWD.match($scope.validatePassword)) {
            notificationError("Your password should contain atleast one capital letter, small letter, number and a special character")
            return;
        }
        else {
        let _data = JSON.stringify({"emailId": registrationId});
            postRequest(_data, oURL.loginAPI, 'checkRepeatUser') //Verify if the user already exists
                .then((data) => {
                    if (data && data.result) {
                        alert("user already exists");
                    }
                    else {
                        $scope.registartionDetails = {
                            registrationFirstName: registrationFirstName,
                            registrationLastName: registrationLastName,
                            registrationPhoneNo: registrationPhoneNo || ''
                        };
                        console.log(data);
                        sendOTP(registrationId, registrationPWD);
                    }
                })
        }
    }

    function sendOTP(registrationId, registrationPWD) {
        let oData = JSON.stringify({"email": registrationId});
        postRequest(oData, oURL.loginAPI, 'sendOTP') //sendOTP
            .then((data) => {
                if (data && data.status) {
                    console.log(data);
                    $("#OTP-modal").show();
                    $scope.registrationId = registrationId;
                    $scope.registrationPWD = registrationPWD;
                }
                else {
                    notificationError("something went wrong");
                }
            })
    }

    $scope.verifyOTP = verifyOTP;
    function verifyOTP(OTP) {
        let registrationId = $scope.registrationId;
        let registrationPWD = $scope.registrationPWD;
        // let otp = $scope.OTP;
        let oData = JSON.stringify({"email": registrationId, "otp": OTP})
        postRequest(oData, oURL.loginAPI, 'verifyOTP') //verifyOTP
            .then((data) => {
                if (data && data.result) {
                    if (data.result) {
                        createUser(registrationId, registrationPWD);
                    }
                    else {
                        notificationError("Incorrect OTP");
                    }
                }
            })
    }

    function createUser(registrationId, registrationPWD) {
        let credentials = encrypt(registrationId, registrationPWD);
        let userData = {
            credentials: credentials,
            registartionDetails: $scope.registartionDetails
        }
        postRequest(userData, oURL.loginAPI, 'newUser') //register the user
            .then((data) => {
                if (data) {
                    alert("Registered successfully");
                    $("#OTP-modal").hide();
                    $scope.isLoginFormDisplayed = true;
                    $scope.formName = "Register";
                }
                else {

                }
            })
    }

    $scope.loginFormRedirect = loginFormRedirect;
    function loginFormRedirect() {
        $scope.isLoginFormDisplayed = !$scope.isLoginFormDisplayed;
        $scope.formName = ( !$scope.isLoginFormDisplayed )? "Login":"Register";
    }

    $scope.login = login;
    function login(loginId, loginPWD) {
        //check if user exists
        let _emailObj = JSON.stringify({"emailId": loginId});
        postRequest(_emailObj, oURL.loginAPI, 'checkRepeatUser') //Verify if the user already exists
                    .then((data) => {
                        if (data && data.result) {
                            console.log(data);
                            notificationError("No such user exists");
                        }
                        else {
                            console.log(data);
                            //login
                            let oData = getCredentials(loginId, loginPWD);
                            postRequest(oData, oURL.loginAPI, 'loginUser')
                                .then((_data) => {
                                    if (_data && _data.result) {
                                        _data = JSON.stringify(_data.result);
                                        // notificationSuccess("Logged in successfully");
                                        document.cookie = `Customer=${_data}`;
                                        location.reload();
                                    }
                                    else {
                                        notificationError("something went wrong");
                                    }
                                })
                        }
                    })
    }
    
    //--------------------------------------------------Login section end------------------------------------

    $scope.closeSignupModal = function() {
        $('#signupModal').hide();
    }

})