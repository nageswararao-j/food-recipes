import { async } from '@angular/core/testing';

import { RandomMealComponent } from './random-meal.component';
import { MealService } from '../services/meal.service';

describe('RandomMealComponent', () => {
  let component: RandomMealComponent;
  let mealService: MealService = {} as any;

  beforeEach(async(() => {
    component = new RandomMealComponent(mealService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a random meal', () => {
    //TODO
  });

  it('should display a meal on every 5secs', () => {
    //TODO
  });

  it('should display a meal title, ingredients, recipe to prepare', () => {
    //TODO
  });

  it('should display a video', () => {
    //TODO
  });
});
