function encrypt(username, password) {
    let salt = GenerateSalt();
    // let key = '' + bcrypt(salt, password);
    let key = $.md5(password + salt);
    let eData = '' + CryptoJS.AES.encrypt(key, password);
    let pill = salt + eData;
    let passwordSalt = ('' + CryptoJS.SHA256(username, password)).slice(-22);
    let tempHash = '' + $.md5(passwordSalt, password);
    let passwordHash = (tempHash).slice(-40);
    //usernameHash = '' + CryptoJS.SHA256(username);
    const creds = JSON.stringify({"username": username, "passwordHash": passwordHash, "pill": pill});
    return creds;
}

function GenerateSalt() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()-_+={}[]|\/:;\<>,?';
    let charactersLength = characters.length;
    for ( let i = 0; i < 32; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
    return result;
}

// function generatePasswordSalt(username, password) {
//     var passwordSalt = ('' + CryptoJS.SHA256(username, password)).slice(-22);
//     return passwordSalt;
// }

// function createUser(credentials) {
//     _createUser(credentials)
// }

// function bcrypt(x, y) {
//     _bcrypt(x, y)
//         .then((data) => {
//             console.log('yes');
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

function getCredentials(username, password) {
    let usernameHash = '' + CryptoJS.SHA256(username);
    let passwordSalt = ('' + CryptoJS.SHA256(username, password)).slice(-22);
    let tempHash = '' + $.md5(passwordSalt, password);
    let passwordHash = (tempHash).slice(-40);
    let data = JSON.stringify({ 'username': username,'usernameHash': usernameHash , 'passwordHash': passwordHash });
    return data;
}

