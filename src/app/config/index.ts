import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASEURL_URL,
  // bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  // default_password: process.env.DEFAULT_PASS,
  jwt_secret: process.env.JWT_SECRET,
};
