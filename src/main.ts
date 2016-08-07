import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { environment } from './app/environments/environment';
import * as hljs from 'highlight.js';
import 'highlight.js/styles/agate.css';
import './main.scss';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);

hljs.initHighlightingOnLoad();
