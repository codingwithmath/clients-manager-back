require('dotenv').config();
import { createConnection } from 'mysql';

const connection = createConnection({
  host: process.env.DBHOST,
  port: Number(process.env.DBPORT),
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME
});

connection.connect();

export default connection;
