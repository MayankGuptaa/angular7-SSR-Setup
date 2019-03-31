import { Injectable, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  private key = `${environment.APP_ID}-user`;
  private user = new BehaviorSubject(null);
  currentUser = this.user.asObservable();

  setCookie(data) {
    if (data && Object.keys(data).length > 0) {
      this.document.cookie = `${this.key} = ${data}`;
      this.user.next(data);
    }
  }

  removeCookie() {
    this.document.cookie = `${this.key} = '', -1`;
    return true;
  }

  isLogout() {
    this.removeCookie();
    this.user.next(null);
  }

}
