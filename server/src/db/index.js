const { Pool } = require('pg')
const pool = new Pool({
    user: 'doireannjane',
    host: 'localhost',
    database: 'defib_auth',
    password: 'fibbyliner23',
    port: 5432
})

module.exports = {
    query: (text, params) => pool.query(text, params),
}