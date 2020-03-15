# FoodRecipes
This application provides a dashboard to search for a meal.
Meal details (meal card) include name of the dish, image of the dish, video of how to prepare the dish, 
a list of ingredients, instructions how to prepare the dish.

## Prerequisites
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6 with Yarn as package manager. 

The following tools/frameworks will be needed to run this application successfully:
* [Node](https://nodejs.org/en/) v10.15.3 or above
* [Npm](https://www.npmjs.com/) v6.4.1 or above
* [AngularJS](https://angular.io/) v9.0.6
* [Ionic v5.0.5](https://ionicframework.com/docs/v1/guide/preface.html)
* [yarn 1.15.2](https://yarnpkg.com/) optional

## Installation guide
- Install the above tools.
- Clone the Repo: `git clone https://github.com/nageswararao-j/food-recipes.git`
- run yarn install to install all the dependencies.
- run yarn start
- open any broswer and go to the link http://localhost:4200/food-recipies/dashboard
- It should display a food-recipes dashboard application 

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn test` to execute the unit tests via [Jest](https://jestjs.io/en/).
To run specific spec file use: `yarn test filename.ts `

## Running end-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

To get more help on the Yarn use `yarn help` or go check out the [Yarn README](https://github.com/yarnpkg/yarn).

## Dependencies added
yarn add -D @ionic/angular-toolkit
yarn add -D @ionic/angular 

## custom-webpack & WireMock Standalone (TODO: Not added at the moment)
yarn add -D @angular-builders/custom-webpack
yar add -D wiremock-standalone


## Improvments
- I would like to configure custom webpack to bootstrap wireMock & use proxying middle-wear server to run application in development with mock services.
But I have to use external API, So I added the  "proxyConfig": "./server/proxy/proxy.config.ts" on ng serve to access that API.
In general, It is a good practice to start wiremock with webpack before running the dev-server and play with mock scenarios.
If I don't get readily available API, then I would prefer the webpack & wire mock customisation.
If you depend on the external APIs to run your application or run integration tests, then it becomes a chain environment. And you never know when your application or running of integration test will fail during the build pipelines.
- Interceptors (Http interceptor, CSRF interceptors etc.,)
- Unit test (Parcially done)
- Integration tests
- e2e tests
- Router guards
- Stop refreshing video when refreshing the random meal.
- Cancel event on search bar
- Jenkins: artifacts publish to nexus, test/producion deployment
- run prodution with proxy