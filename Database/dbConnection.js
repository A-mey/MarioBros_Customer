exports.dbConnection = function () {
    var dbConfig = {
        "server": 'DESKTOP-5JAU2HK\SQLEXPRESS',
        "user": 'sa',
        "password": 'root',
        "server": 'localhost',
        "database": 'SIP',
        "port": 1433,
        "dialect": "mssql",
        "dialectOptions": {
            "instanceName": "SQLEXPRESS"
        },
        "options": {
            "trustServerCertificate": true,
          }
    };
    return dbConfig;
};
