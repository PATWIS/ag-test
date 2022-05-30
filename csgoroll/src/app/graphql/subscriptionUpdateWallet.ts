import { Injectable } from '@angular/core';
import { Subscription, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class WalletUpdateGQL extends Subscription {
  override document = gql`
    subscription OnUpdateWallet {
      updateWallet {
        wallet {
          id
          amount
          name
        }
      }
    }
  `;
}
