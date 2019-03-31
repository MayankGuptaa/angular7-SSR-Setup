import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterResolverExampleComponent } from './router-resolver-example.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { RouteResolverGuard } from '../../gaurds/route-resolver.guard';
import { RouterResolverService } from '../../services/router-resolver/router-resolver.service';
const routes: Routes = [
  { path: '', component: RouterResolverExampleComponent },
  {
    path: 'detail/:id',
    component: DetailComponent,
    resolve: {demoData: RouterResolverService}
   }
];

@NgModule({
  declarations: [RouterResolverExampleComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RouterResolverExampleModule { }

