import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { BoxConnection } from '../models/box';

interface QueryBoxesResponse {
  boxes: BoxConnection;
}

@Injectable({
  providedIn: 'root'
})
export class QueryBoxesGQL extends Query<QueryBoxesResponse> {
  override document = gql`
    query getBoxes {
      boxes(free: false, purchasable: true, openable: true, first: 50) {
        edges {
          node {
            id
            name
            iconUrl
            cost
          }
        }
      }
    }
  `;
}
