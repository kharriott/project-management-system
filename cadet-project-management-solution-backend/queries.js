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

const getProjects = (request, response) => {
  pool.query('SELECT * FROM projects;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// select * from users where id=1;
const getUserById= (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM users WHERE id = $1;', [id] ,(error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
    getUsers,
    getProjects,
    getUserById
}