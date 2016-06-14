import 'core-js';
//import "zone.js";
import 'reflect-metadata';
import 'zone.js/dist/zone';


import { bootstrap } from '@angular/platform-browser-dynamic';
import { App } from './app.component.ts';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(App, [ HTTP_PROVIDERS ]);