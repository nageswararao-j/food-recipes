import { Routes } from "@angular/router";
import { DashboardComponent } from './dashboard.component';
import { RandomMealComponent } from '../meal/random-meal/random-meal.component';
import { MealSearchComponent } from '../meal/meal-search/meal-search.component';


/**
 * Since all the componets are rendered under the dashboard,this route lazy loadiing is optional.
 * Best practice is when you want to load child components under one parent path.
 * Example: parent path /payments with child routes /payments/batch-payment or /payments/credit-card-pay.
 */
export const routes : Routes = [
    { path: '', redirectTo:'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'random', component: RandomMealComponent },
    { path: 'search', component: MealSearchComponent},
];