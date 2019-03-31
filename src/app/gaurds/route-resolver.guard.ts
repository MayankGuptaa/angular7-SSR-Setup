import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteResolverGuard implements Resolve<any> {


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('a', route.data);

  }

}
