import { Component, OnInit, ViewChild } from '@angular/core';
import { MealCardComponent } from '../meal-card/meal-card.component';
import { interval, Observable, Subscription } from 'rxjs';
import { MealService } from '../services/meal.service';
import { Meal } from '../model/Meal';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-random-meal',
  templateUrl: './random-meal.component.html',
  styleUrls: ['./random-meal.component.css']
})
export class RandomMealComponent implements OnInit {
  
  @ViewChild(MealCardComponent) mealCardComponent;
  
  meals$: Observable<Meal[]>;
  loadingErrorMessage:  string;
  randomMealInterval = interval(5000);
  subscription: Subscription = new Subscription();
  
  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.getRandomMeal()
    );
  }

  /**
   * To get random meal details to display on the dashboard page
   * on the right section on every 5secs. If there is no random meal details found then
   * display an error message on the page.
   */
  getRandomMeal(): void {
    this.randomMealInterval.subscribe((randomMeal) => {
      this.mealCardComponent.meals$ = this.meals$ = this.mealService.getRandomMeal().pipe(map((response: any) => {
        if(response.meals === null){
          this.loadingErrorMessage =  'Sorry, There is no random meal available at the moment';
        }
        return response.meals;
      }));
    });
  }

  /**
   * unsubscribe random meal details when we don't load them.
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
