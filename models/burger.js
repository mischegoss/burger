// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  // READ/SELECT all the records in the database - references the orm.all
  // ===========================================================================
  all: function(br) {
    orm.all('burgers', function(res) {
      br(res);
    });
  },
  // CREATE/INSERT a new record to the database - references the orm.create
  // ===========================================================================
  create: function(cols, vals, br) {
    orm.create('burgers', cols, vals, function(res) {
      br(res);
    });
  },
  // UPDATE/UPDATE a specific record in the database - references the orm.update
  // ===========================================================================
  update: function(objColVals, condition, br) {
    orm.update('burgers', objColVals, condition, function(res) {
      br(res);
    });
  },
  // DELETE/DELETE a specific record in the database - references the orm.delete
  // ===========================================================================
  delete: function(condition, br) {
    orm.delete('burgers', condition, function(res) {
      br(res);
    });
  },
};

// Export the database functions for the controller - used in the burgersController.js file
// ===========================================================
module.exports = burger;
