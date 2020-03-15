import { async } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  
  beforeEach(async(() => {
    component = new DashboardComponent();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component).toBeTruthy();
  });

  it('should display search bar section', () => {
    //TODO
  });

  it('should display random meal section', () => {
    //TODO
  });
});
