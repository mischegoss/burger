var connection = require('./connection.js');

var orm = {
    selectAll: function(tableName, callback){
        var queryString = 'SELECT * FROM ' + tableName + ';';
        connection.query(queryString, function(err, result){
            if(err) throw err;
            callback(result);
        })
    },
    insertOne: function(tableName, val, callback){
        var queryString = 'INSERT INTO ' + tableName + ' (burger_name) VALUES (\'' + val + '\');' ;
        console.log('queryString ', queryString)
        connection.query(queryString, function(err, response){
            if(err) throw err;
            callback(response);
        })
    },
    updateOne: function(tablename, id, callback){
        var queryString = 'UPDATE ' + tablename + ' SET devoured=true where id=' + id + ';';
        console.log('queryString ', queryString)
        connection.query(queryString, function(err, response){
            if(err) throw err;
            callback(response);
        })
    }
}

module.exports = orm