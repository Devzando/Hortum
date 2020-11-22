require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME
    },
    migrations:{
      directory: `${__dirname}/src/database/migrations`
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`
    },

    useNullAsDefault: true
  }
};
