import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RandomMealComponent } from './features/meal/random-meal/random-meal.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { MealSearchComponent } from './features/meal/meal-search/meal-search.component';
import { MealCardComponent } from './features/meal/meal-card/meal-card.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RandomMealComponent,
    MealSearchComponent,
    MealCardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
