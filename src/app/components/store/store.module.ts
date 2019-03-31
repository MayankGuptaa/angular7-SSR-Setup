import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';

import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  { path: '' , component: CreateComponent} // default route
];

@NgModule({
  declarations: [
    ReadComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({
      tutorial: reducer
    })
  ]
})
export class StoreTutorialModule { }

// Complete Store Tutorial
// https://coursetro.com/posts/code/151/Angular-Ngrx-Store-Tutorial---Learn-Angular-State-Management
