import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { BoxDetails } from '../models/box';

@Injectable({
  providedIn: 'root'
})
export class QueryBoxDetailsGQL extends Query<BoxDetails> {
  override document = gql`
    query BoxDetails($boxId: ID) {
      box(id: $boxId) {
        id
        name
        cost
        iconUrl
      }
    }
  `;
}
