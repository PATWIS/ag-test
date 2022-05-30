import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';
import { BoxOpeningResult } from '../models/openBox';

@Injectable({
  providedIn: 'root'
})
export class MutationOpenBoxGQL extends Mutation<BoxOpeningResult> {
  override document = gql`
    mutation OpenBox($input: OpenBoxInput!) {
      openBox(input: $input) {
        boxOpenings {
          id
          itemVariant {
            id
            name
            value
          }
        }
      }
    }
  `;
}
