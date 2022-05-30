import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { CurrentUserGQL } from '../graphql/queryCurrentUser';
import { CurrentUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // workaround for updateWallet sub, balance is upgraded after box open action
  balance$: Observable<number> | undefined;
  private _balance$ = new BehaviorSubject<number>(0);

  constructor(private currentUserGQL: CurrentUserGQL) {
    this.balance$ = this._balance$.asObservable();
  }

  public getCurrentUser(): Observable<CurrentUser | null> {
    return this.currentUserGQL.watch(undefined, { fetchPolicy: 'no-cache' }).valueChanges.pipe(
      map((result) => result.data.currentUser),
      tap((user) => {
        if (user) {
          this._balance$.next(this._calcBalance(user));
        }
      })
    );
  }

  public login() {
    window.location.href = `${environment.graphQLUrl}/auth/steam?redirectUri=${environment.redirectUrl}`;
  }

  private _calcBalance(user: CurrentUser): number {
    return user.wallets.map((x) => x.amount).reduce((prev, curr) => prev + curr, 0);
  }
}
