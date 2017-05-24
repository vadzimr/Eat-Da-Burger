const mysql = require('mysql');
let connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });
}

connection.connect(err => {
  if (err) {
    throw new Error(`Connection to {$connection.database} failed\n${err}`);
  }
  console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;
