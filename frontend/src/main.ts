import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';   // ✅ ruta correcta
import { appConfig } from './app/app.config';         // ✅ usar appConfig

bootstrapApplication(AppComponent, appConfig);
