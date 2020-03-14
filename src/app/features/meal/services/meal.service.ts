import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, debounceTime } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { }

  /**
   * Get random meal detials from the external service.
   */
  getRandomMeal() {
    return this.http.get<any>('/random-meal').pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error: any) => Observable.throw(error || 'Error while loding random meal recipes'))
    );
  }

  /**
   * Find meal details by the meal name.
   * @param searchTerm 
   */
  findMealByName(searchTerm?: string){
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
      params: new HttpParams().append('s', searchTerm)
    }

    return this.http.get<any>('/meal',options).pipe(debounceTime(5000),
      map((response:any) => {
        return response;
      }),catchError((error : any) => Observable.throw(error || 'Error in finding meal by its name'))
    );
  }
}
