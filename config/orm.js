const connection = require('./connection.js');

let orm = {
  selectAll: (table, callback) => {
    let query = 'SELECT * FROM ??';
    connection.query(query, [table], (err, response) => {
      if (err) throw new Error('Could not retrieve the table', err);
      if (callback) return callback(response);
      return response;
    });
  },
  insertOne: (table, keys, burgObj, callback) => {
    let query = 'INSERT INTO ?? (??, ??, ??) VALUES (?, ?, ?);';
    connection.query(query, [table, keys[0], keys[1], keys[2], burgObj[keys[0]], burgObj[keys[1]], burgObj[keys[2]]], (err, response) => {
      if (err) throw new Error('Adding a new item threw an error', err);
      callback(response);
    });
  },
  updateOne: (table, valObj, cond, callback) => {
    let query = 'UPDATE burgers SET ? WHERE ' + cond;

    connection.query(query, valObj, (err, response) => {
      if (err) throw new Error('Updating item failed', err);
      callback(response);
    });
  },
  deleteOne: (table, condition, callback) => {
    let query = "DELETE FROM ?? WHERE " + condition;
    connection.query(query, table, (err, response) => {
      if (err) throw new Error('Deleating the record failed', err);
      callback(response);
    });
  }
};

module.exports = orm;
