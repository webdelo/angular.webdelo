/**
 * Created by dmitricercel on 15.11.16.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { IndexModule } from './index.app';
const platform = platformBrowserDynamic();
platform.bootstrapModule(IndexModule);
