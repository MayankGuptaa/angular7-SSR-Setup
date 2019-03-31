import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterResolverService implements Resolve<any> {

  demoData = [
    {name: 'test1', url: 'http1'},
    {name: 'test2', url: 'http2'},
    {name: 'test3', url: 'http3'},
    {name: 'test4', url: 'http4'},
  ];

  constructor() { }
  resolve(route: ActivatedRouteSnapshot) {
    return this.demoData;
  }


}
