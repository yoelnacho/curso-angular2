import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CursoAngular2AppComponent } from '../app/curso-angular2.component';

beforeEachProviders(() => [CursoAngular2AppComponent]);

describe('App: CursoAngular2', () => {
  it('should create the app',
      inject([CursoAngular2AppComponent], (app: CursoAngular2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'curso-angular2 works!\'',
      inject([CursoAngular2AppComponent], (app: CursoAngular2AppComponent) => {
    expect(app.title).toEqual('curso-angular2 works!');
  }));
});
