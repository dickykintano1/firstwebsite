const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'firstwebsite',
  password: 'whatthefuck',
  port: 5432,
})

module.export = pool;