function encrypt(username, password) {
    let salt = GenerateSalt();
    let key = $.md5(password + salt);
    let eData = '' + CryptoJS.AES.encrypt(key, password);
    let pill = salt + eData;
    let passwordSalt = ('' + CryptoJS.SHA256(username, password)).slice(-22);
    let tempHash = '' + $.md5(passwordSalt, password);
    let passwordHash = (tempHash).slice(-40);
    return JSON.stringify({"username": username, "passwordHash": passwordHash, "pill": pill});
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

function getCredentials(username, password) {
    let usernameHash = '' + CryptoJS.SHA256(username);
    let passwordSalt = ('' + CryptoJS.SHA256(username, password)).slice(-22);
    let tempHash = '' + $.md5(passwordSalt, password);
    let passwordHash = (tempHash).slice(-40);
    return JSON.stringify({ 'username': username,'usernameHash': usernameHash , 'passwordHash': passwordHash });
}

