
import { MealService } from './meal.service';
import { of } from 'rxjs';

describe('MealService', () => {
  let service: MealService;
  let httpClient;

  beforeEach(() => {
    httpClient = {
      get: jest.fn().mockReturnValue(of())
    };
    
    service = new MealService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeInstanceOf(MealService);
  });

  it('random meal endpoint should be called', () => {
    service.getRandomMeal();
    expect(httpClient.get).toHaveBeenCalledWith('/random-meal');
  });

  it('random meal should throw an error', () => {
   let errorMsg = 'Error while loding random meal recipes';
    service.getRandomMeal();
    httpClient = {
      get: errorMsg,
    };
    expect(httpClient.get).toContain(errorMsg);
  });

  it('find meal endpoint should be called', () => {
    service.findMealByName();
    expect(httpClient.get).toHaveBeenCalledTimes(1);
  });


  it('find meal should throw an error', () => {
    let errorMsg = 'Error in finding meal by its name';
     service.getRandomMeal();
     httpClient = {
       get: errorMsg,
     };
     expect(httpClient.get).toContain(errorMsg);
   });

});
