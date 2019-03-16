import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private cookieService: CookieService ) { }

  private key = `${environment.APP_ID}-user`;
  private user = new BehaviorSubject(null);
  currentUser = this.user.asObservable();

  isUserLogin: boolean = this.cookieService.check(this.key);
  getCookieValue: string = this.cookieService.get(this.key);

  setCookie(data) {
    if (data && Object.keys(data).length > 0) {
    this.cookieService.set(this.key, data);
    this.user.next(data);
    console.log(this.getCookieValue);
    }
  }

  removeCookie() {
    this.cookieService.delete(this.key);
    return true;
  }

  isLogout() {
    this.removeCookie();
    this.user.next(null);
  }

}
