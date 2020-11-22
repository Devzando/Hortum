require('dotenv').config();

const knex = require('knex');

const connection = knex({
    client: 'mysql2',
    connection: {
        host : 'localhost',
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME
    },

    useNullAsDefault: true
});



module.exports = connection;