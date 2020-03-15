import { async } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;

  beforeEach(async(() => {
    component = new PageNotFoundComponent();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display back to dashboard link', () => {
    //TODO
  });

  it('should display proper message', () => {
    //TODO
  });
});
