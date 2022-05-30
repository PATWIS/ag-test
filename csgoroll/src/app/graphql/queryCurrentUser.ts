import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';
import { CurrentUser } from '../models/user';

interface CurrentUserQueryResult {
  currentUser: CurrentUser | null;
}

@Injectable({
  providedIn: 'root'
})
export class CurrentUserGQL extends Query<CurrentUserQueryResult> {
  override document = gql`
    query getCurrentUser {
      currentUser {
        id
        name
        wallets {
          id
          amount
          currency
        }
      }
    }
  `;
}
