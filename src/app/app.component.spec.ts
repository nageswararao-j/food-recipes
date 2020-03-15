import { AppComponent } from "./app.component";

let appComponent: AppComponent;

describe('AppComponent', () => {
  
  beforeEach(() => {
    appComponent = new AppComponent();
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it(`should have as title 'food-recipes'`, () => {
    //TODO
  });

  it('should render title', () => {
    //TODO
  });
});
