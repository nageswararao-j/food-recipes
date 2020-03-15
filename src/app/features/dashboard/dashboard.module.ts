import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealCardComponent } from '../meal/meal-card/meal-card.component';
import { MealSearchComponent } from '../meal/meal-search/meal-search.component';
import { RandomMealComponent } from '../meal/random-meal/random-meal.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IonicModule } from '@ionic/angular';
import { routes } from './dashboard.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    MealCardComponent,
    MealSearchComponent,
    RandomMealComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule.forRoot(), 
  ],
})
export class DashboardModule { }
