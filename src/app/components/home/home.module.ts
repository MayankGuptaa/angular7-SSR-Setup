import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home.component';

// Home module routing
const routes: Routes = [
    { path: '' , component: HomeComponent} // default route
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FlexLayoutModule,
    CommonModule
  ]
})
export class HomeModule { }
