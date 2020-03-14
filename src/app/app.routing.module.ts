import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RandomMealComponent } from './features/meal/random-meal/random-meal.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MealSearchComponent } from './features/meal/meal-search/meal-search.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';


const routes : Routes = [
  { path: '', redirectTo:'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'random', component: RandomMealComponent },
  { path: 'search', component: MealSearchComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
