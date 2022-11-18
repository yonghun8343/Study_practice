const mariadb = require("mariadb");

async function asyncSQL(sql) {
  const conn = await mariadb.createConnection({
    host: process.env.host,
    user: "root",
    password: "root",
    port: process.env.dbport,
    database: process.env.database,
  });

  try {
    const res = await conn.query(sql);
    return res;
  } catch (error) {
    console.log(error);
    throw new Error("에러가 발생 했습니다.");
  } finally {
    conn.end();
  }
}

module.exports = asyncSQL;
