function postRequest(oData, url, method) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url + method,
            type: "POST",
            data: oData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (data) {
                resolve(data);
            },
            error: function (data) {
                reject(data);
            },
            failure: function (data) {
                reject(data);
            }
        })
    })  
}

// function createUser(credentials) {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: "http://localhost:3000/newUser",
//             type: "POST",
//             data: credentials,
//             contentType: "application/json; charset=utf-8",
//             dataType: 'json',
//             success: function (data) {
//                 resolve(data);
//             },
//             error: function (data) {
//                 reject(data);
//             },
//             failure: function (data) {
//                 reject(data);
//             }
//         })
//     })   
// }

// function _sendOTP(email) {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: "http://localhost:3000/sendOTP",
//             type: "POST",
//             data: JSON.stringify({"email": email}),
//             contentType: "application/json; charset=utf-8",
//             dataType: 'json',
//             success: function (data) {
//                 resolve(data);
//             },
//             error: function (data) {
//                 reject(data);
//             },
//             failure: function (data) {
//                 reject(data);
//             }
//         })
//     })
// }

// function _verify(emailid, otp) {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: "http://localhost:3000/verify",
//             type: "POST",
//             data: JSON.stringify({"email": emailid, "otp": otp}),
//             contentType: "application/json; charset=utf-8",
//             dataType: 'json',
//             success: function (data) {
//                 resolve(data);
//             },
//             error: function (data) {
//                 reject(data);
//             },
//             failure: function (data) {
//                 reject(data);
//             }
//         })
//     })
// }