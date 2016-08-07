/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PostService } from './post';

describe('App: BlogWeb', () => {
  beforeEach(() => {
    addProviders([AppComponent, PostService]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));
  
});
