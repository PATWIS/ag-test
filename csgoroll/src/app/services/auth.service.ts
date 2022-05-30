import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { CurrentUser, CurrentUserGQL } from '../graphql/currentUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private currentUserGQL: CurrentUserGQL) {}

  public getCurrentUser(): Observable<CurrentUser | null> {
    return this.currentUserGQL.watch().valueChanges.pipe(map((result) => result.data.currentUser));
  }

  public login() {
    window.location.href = `${environment.graphQLUrl}/auth/steam?redirectUri=${environment.redirectUrl}`;
  }
}
