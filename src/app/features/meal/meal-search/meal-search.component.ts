import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MealCardComponent } from '../meal-card/meal-card.component';
import { Meal } from '../model/Meal';
import { MealService } from '../services/meal.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-meal-search',
  templateUrl: './meal-search.component.html',
  styleUrls: ['./meal-search.component.css']
})
export class MealSearchComponent implements OnInit {
  
  @ViewChild(MealCardComponent) mealCardComponent;
  
  loadingErrorMessage: string; //To be improved
  stopOnChangeEvent: boolean;

  constructor(private mealService: MealService){
    this.stopOnChangeEvent = false;
  }

  ngOnInit(): void {
    
  }

  /**
   * Searching for a meal with searchTerm from UI search bar
   * with debounceTime 5000ms
   * @param event 
   */
  ionChange(event: KeyboardEvent): void {
    this.loadingErrorMessage = ''; //To be improved
    if(!this.stopOnChangeEvent){
      this.getMealByName(this.getSearchTerm(event));
    }
  }

  /**
   * Searching for a meal with searchTerm from UI search bar
   * when user presses enter key.
   * @param event 
   */
  onSumbit(event: KeyboardEvent): void {
    this.loadingErrorMessage = ''; //To be improved
    if(event.which === 13){
      this.stopOnChangeEvent = true;
    }
    this.getMealByName(this.getSearchTerm(event));
  }

  /**
   * Get meal detials by searchTerm
   * When there is no meal found with the searchTerm then
   * display an error message on the page.
   * @param searchTerm 
   */
  getMealByName(searchTerm? : string): any {
    this.mealCardComponent.meals$ = this.mealService.findMealByName(searchTerm).
      pipe(map((response: any) => {
        if(response.meals === null){
          this.loadingErrorMessage =  'Sorry, There is no meal available with "'+searchTerm+'"';
        }
      return response.meals;
    }));
  }

  /**
   * 
   * @param event return a searchTerm
   */
  getSearchTerm(event): string{
    return event.target.value;
  }

  /**
   * To be implemented.
   */
  onCancel(){
    
  }
}
