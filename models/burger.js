var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        })
    },
    create: function(val, cb){
        console.log('val ', val)
        orm.insertOne('burgers', val, function(res){
            cb(res);
        })
    },
    update: function(id, cb){
        console.log('id ', id)
        var idNum = id.id
        console.log(idNum);
        orm.updateOne('burgers', idNum, function(res){
            cb(res);
        })
    }
};

module.exports = burger;