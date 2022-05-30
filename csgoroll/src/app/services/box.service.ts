import { Injectable } from '@angular/core';
import { MutationResult } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { MutationOpenBoxGQL } from '../graphql/mutationOpenBox';
import { QueryBoxDetailsGQL } from '../graphql/queryBoxDetails';
import { QueryBoxesGQL } from '../graphql/queryBoxes';
import { Box } from '../models/box';
import { BoxOpeningResult, OpenBoxInput } from '../models/openBox';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  constructor(
    private queryBoxesGQL: QueryBoxesGQL,
    private queryBoxDetailsGQL: QueryBoxDetailsGQL,
    private mutationOpenBoxGQL: MutationOpenBoxGQL
  ) {}

  public getBoxes(): Observable<Box[]> {
    return this.queryBoxesGQL
      .watch()
      .valueChanges.pipe(map((x) => x?.data?.boxes?.edges.map((x) => x.node)));
  }

  public getBoxDetails(id: string): Observable<Box> {
    return this.queryBoxDetailsGQL.fetch({ boxId: id }).pipe(map((x) => x?.data.box));
  }

  public openBox(openBoxInput: OpenBoxInput): Observable<MutationResult<BoxOpeningResult>> {
    return this.mutationOpenBoxGQL.mutate({ input: openBoxInput });
  }
}
