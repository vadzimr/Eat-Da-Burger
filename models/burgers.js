const orm = require('../config/orm.js');

let burgers;

burgers = {
  all: (table = 'burgers', cb) => {
    orm.selectAll(table, cb);
  },
  add: (table = 'burgers', keys = ['burger_name', 'devoured', 'date'], burg, cb) => {
    orm.insertOne(table, keys, burg, cb);
  },
  update: (table = 'burgers', burg, cond, cb) => {
    orm.updateOne(table, burg, cond, cb);
  },
  delete: (table = 'burgers', cond, cb) =>{
    orm.deleteOne(table, `id = ${cond}`, cb);
  }
};

module.exports = burgers;
