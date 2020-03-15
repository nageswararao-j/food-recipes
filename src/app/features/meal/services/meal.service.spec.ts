
import { MealService } from './meal.service';
import { of } from 'rxjs';

describe('MealService', () => {
  let service: MealService;
  let httpClient;

  beforeEach(() => {
    httpClient = jest.fn(() => of());
    service = new MealService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeInstanceOf(MealService);
  });
});
