import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        canActivateChild: [
          //TODO Enabled router guards here
        ],
        children: routes,
      },
    ]),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
