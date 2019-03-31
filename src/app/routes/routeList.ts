/* Application LAzy routing list  */
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadChildren: '../components/home/home.module#HomeModule'
    },
    {
      path: 'store',
      loadChildren: '../components/store/store.module#StoreTutorialModule'
     },
    {
      path: 'router-resolver',
      loadChildren: '../components/router-resolver-example/router-resolver-example.module#RouterResolverExampleModule'
    }
  ];
