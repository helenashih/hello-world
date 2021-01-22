import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

function doSomething() {
  for (var i = 0; i< 5; i++) {
    console.log(i);
  }
  console.log('Finally:' + i);
}
doSomething();
