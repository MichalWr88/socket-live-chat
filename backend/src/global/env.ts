import * as dotenv from 'dotenv';

import { APP_ENV } from '../models/enums/envoirment';
import * as pjson from '../../package.json';
const envoirment: APP_ENV = (process.env.NODE_ENV as APP_ENV) || APP_ENV.LOCAL;
dotenv.config({ path: `${__dirname}/../../env/${envoirment}.env` });

const config = {
  PRODUCTION: envoirment === APP_ENV.PROD,
  ENVOIRMENT: envoirment,
  VERSION: pjson.version,
  MAIL_DB_HOST: process.env.MAIL_DB_HOST || '127.0.0.1',
  MAIL_DB_NAME: process.env.MAIL_DB_NAME || '',
  MAIL_DB_PORT: process.env.MAIL_DB_PORT || '',
  MAIL_DB_USER: process.env.MAIL_DB_USER || '',
  MAIL_DB_PASS: process.env.MAIL_DB_PASS || '',
  PORT: Number(process.env.PORT) || 5000,
};

export default config;
