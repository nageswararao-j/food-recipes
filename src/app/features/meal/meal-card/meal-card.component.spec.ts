import { async } from '@angular/core/testing';

import { MealCardComponent } from './meal-card.component';
import { DomSanitizer } from '@angular/platform-browser';

describe('MealCardComponent', () => {
  let component: MealCardComponent;
  const mockDomSanitizer: DomSanitizer = {} as any;

  beforeEach(async(() => {
    component = new MealCardComponent(mockDomSanitizer);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sanitize a link', () => {
    //TODO
  });
});
