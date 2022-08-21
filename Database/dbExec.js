var sql = require('mssql');
var Promise = require('promise');
var dbConfig = require('./dbConnection');

exports.dbExecution = function(SP, ...args) {
    sql.connect(dbConfig.dbConnection()).then(() => {
        sql.query("EXEC"+ SP +"'"+ args);
    }).then(result => {
        console.log(result);
        return result;
    }).catch(err => {
        console.log(err);
        return err;
    })
    return dbExec;
}