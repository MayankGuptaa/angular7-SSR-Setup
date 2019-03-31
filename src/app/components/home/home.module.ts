import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TestComponent } from './test/test.component';

// Home module routing
const routes: Routes = [
    { path: '' , component: HomeComponent} // default route
];

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    PaginationComponent,
    TestComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    FlexLayoutModule,
    CommonModule
    ]
})
export class HomeModule { }
