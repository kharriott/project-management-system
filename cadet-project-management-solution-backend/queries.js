const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'cadet_database',
  password: 'aLowbrid',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users;', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

module.exports = {
    getUsers
}