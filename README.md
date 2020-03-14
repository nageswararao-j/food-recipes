# FoodRecipes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.
Used @angualr/cli version 9.0.5 as angular 7 show lot of deprecation warnings. Used Yarn as package manager here. 

## Development server

Run `yarn serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

To get more help on the Yarn use `yarn help` or go check out the [Yarn README](https://github.com/yarnpkg/yarn).

## Dependencies added
yarn add -D @ionic/angular-toolkit
yarn add -D @ionic/angular 

## custom-webpack & WireMock Standalone (Not added at the moment)
yarn add -D @angular-builders/custom-webpack
yar add -D wiremock-standalone

## generate modules, services, components in features folder as best practice.
ng generate service features/ServiceName 
ng generate module app.routing --flat --module=app 

## Improvments
I would like to configure custom webpack to bootstrap wireMock & use proxying middle-wear server to run application in development with mock services.
But I have to use external API, So I added the  "proxyConfig": "./server/proxy/proxy.config.ts" on ng serve to access that API.
In general, It is a good practice to start wiremock with webpack before running the dev-server and play with mock scenarios.
If I don't get readily available API, then I would prefer the webpack & wire mock customisation.
If you depend on the external APIs to run your application or run integration tests, then it become a chain environment. And you never know when your application or running of integration test will fail during the build pipelines.