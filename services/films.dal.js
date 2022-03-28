const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dvdrental",
  password: "postgres",
  port: 5432,
});

var getFilms = function () {
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * FROM vw_customers";
    pool.query(sql, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows); // rows from database
      }
    });
  });
};

var getFilmById = function (id) {
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * FROM vw_films_rented WHERE customer_id = $1";
    pool.query(sql, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows); // rows from database
      }
    });
  });
};

module.exports = {
  getFilms,
  getFilmById,
};
