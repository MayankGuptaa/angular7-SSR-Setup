/* Application LAzy routing list  */
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: '../components/home/home.module#HomeModule'}
  ];
