import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule } from '@angular/router';

/**
 * Since PageNotFound does't have an children,this route lazy loadiing is optional.
 * Best practice is when you want to load child components under one parent path.
 * Example: parent path /payments with child routes /payments/batch-payment or /payments/credit-card-pay.
 */
export const routes = [
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PageNotFoundModule { }
