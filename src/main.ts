import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import '../src/assets/js/swiper-bundle.min.js'


platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
