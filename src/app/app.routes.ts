import { Routes, Route } from '@angular/router';

export const dashboard: Route = {
  path: '',
  loadChildren: './features/dashboard/dashboard.module#DashboardModule',
};

export const pageNotFound: Route = {
  path: '**',
  loadChildren: './features/page-not-found/page-not-found.module#PageNotFoundModule',
};

export const routes: Routes = [
  dashboard,
  pageNotFound
]
