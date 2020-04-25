import * as express from 'express';
import { Application } from 'express';
import { home } from './routes';

class WebApplication {

  private app: Application;
  private port: number = 80;
  private host: string = '0.0.0.0';

  constructor() {

    this.setup();
    this.loadMiddlewares();
    this.loadErrorHandlers();
    this.loadRoutes();

  }

  private setup() {

    if (process.env.HOST) {
      this.host = process.env.HOST;
    }

    if (process.env.PORT) {
      this.port = parseInt(process.env.PORT, 10);
    }

    this.app = express();
  }

  private loadErrorHandlers() {

    // TODO: load error handlers

  }

  private loadMiddlewares() {

    // TODO: load middleware

  }

  private loadRoutes(): void {

    this.app.use(home);

  }

  public start(): Application {

    this.app.listen(this.port, this.host, () => {

      console.log(`Running on http://${this.host}:${this.port}`);

    });

    return this.app;
  }

}

export const app = new WebApplication();

app.start();