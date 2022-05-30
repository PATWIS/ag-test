import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  public login() {
    window.location.href = `${environment.authUrl}?redirectUri=${environment.redirectUrl}`;
  }
}
