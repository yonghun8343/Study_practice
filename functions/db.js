const mariadb = require("mariadb/callback");

function asyncSQL(sql, callback) {
  const conn = mariadb.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: process.env.dbport,
    database: process.env.database,
  });

  conn.query(sql, (err, rows) => {
    callback(err, rows);
    conn.end();
  });
}

module.exports = asyncSQL;

// If it's a select query, just take the length of the returned array.

// connection.query(sql, [var1,var2], function(err, results) {
//     numRows = results.length;
// });
// If it's an update/delete query, the returned dictionary will have an affectedRows variable.

// connection.query(sql, [var1,var2], function(err, result) {
//     numRows = result.affectedRows;
// });

// const mariadb = require("mariadb");

// async function asyncSQL(sql) {
//   const conn = await mariadb.createConnection({
//     host: process.env.host,
//     user: "root",
//     password: "root",
//     port: process.env.dbport,
//     database: process.env.database,
//   });

//   try {
//     const res = await conn.query(sql);
//     return res;
//   } catch (error) {
//     console.log(error);
//     throw new Error("에러가 발생 했습니다.");
//   } finally {
//     conn.end();
//   }
// }

// module.exports = asyncSQL;
