import { async } from '@angular/core/testing';

import { MealSearchComponent } from './meal-search.component';
import { MealService } from '../services/meal.service';

describe('MealSearchComponent', () => {
  let component: MealSearchComponent;
  let mealService: MealService = {} as any;

  beforeEach(async(() => {
    component = new MealSearchComponent(mealService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search for a meal on entre key press', () => {
    //TODO
  });

  it('should return an error message, when meal details are unavailable', () => {
    //TODO
  });

  it('should clear meal details when click on cancel button ', () => {
    //TODO
  });

});
