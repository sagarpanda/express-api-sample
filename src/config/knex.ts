const connectDb = () => {
  if (process.env.DB_CLIENT === 'mysql') {
    return require('knex')({
      client: 'mysql2',
      connection: {
        host: process.env.DB_DATABASE,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
      }
    });
  } else {
    return require('knex')({
      client: 'sqlite3',
      connection: {
        filename: process.env.DB_DATABASE_SQLITE
      }
    });
  }
};

const knex = connectDb();

export default knex;
