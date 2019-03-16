/*
  Create a main file to export AppServerModule
  Create a main file for your Universal bundle in the app src/ folder to export your AppServerModule instance.
 */
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
