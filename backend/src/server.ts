/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import './global';

import config from './global/env';
import indexRoute from './routes/index';
import exception from './middlewares/exception';
import notFound from './middlewares/notFound';
import { APP_ENV } from './models/enums/envoirment';

class Server extends http.Server {
  private routes: Array<[string, express.Router]>;
  constructor(public app: express.Application = express()) {
    super(app);
    this.app = app;
    this.routes = [['/', indexRoute]];
  }

  public async start(): Promise<http.Server> {
    this.app.set('port', config.PORT);
    // this.setDatabase();
    this.setMiddleware();
    return this.app.listen(this.app.get('port'), () => {
      console.log(`server : http://localhost:${this.app.get('port')}`);
    });
  }
  private async setDatabase() {
    const mongodbOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      user: config.ENVOIRMENT === APP_ENV.LOCAL ? '' : config.MAIL_DB_USER,
      pass: config.ENVOIRMENT === APP_ENV.LOCAL ? '' : config.MAIL_DB_PASS,
    };
    try {
      mongoose.connect(
        `mongodb://${config.MAIL_DB_HOST}:${config.MAIL_DB_PORT}/${config.MAIL_DB_NAME}`,
        mongodbOptions
      );

      if (config.PRODUCTION) {
        mongoose.set('debug', true);
      }
    } catch (err) {
      console.log(`❌ Error on DB Connection:${err}`);
    }
    mongoose.connection.once('open', function () {
      console.log('✅ Connected to DB');
    });
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  }

  private setRouter(): void {
    this.routes.forEach((route) => {
      const [url, controller] = route;
      this.app.use(url, controller);
    });
    this.app.use(notFound);
    this.app.use(exception);
  }

  private setMiddleware() {
    if (config.PRODUCTION) {
      this.app.use(helmet());
      this.app.use(morgan('combined'));
    } else {
      this.app.use(morgan('dev'));
      this.app.use(
        cors({
          origin: true,
          credentials: true,
        })
      );
    }

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.setRouter();
  }
}

export default Server;
