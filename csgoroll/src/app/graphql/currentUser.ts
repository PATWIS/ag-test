import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';

export interface CurrentUser {
  id: string;
  name: string;
  wallets: Wallet[];
}

export interface Wallet {
  id: string;
  amount: number;
  currency: string;
}

export interface CurrentUserQueryResult {
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
