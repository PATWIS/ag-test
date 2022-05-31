import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { Box } from 'src/app/models/box';
import { ItemVariant, OpenBoxInput } from 'src/app/models/openBox';
import { BoxService } from 'src/app/services/box.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'cgr-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss']
})
export class BoxDetailsComponent implements OnInit, OnDestroy {
  box$: Observable<Box> | undefined;
  loading = false;
  boxResultItems: ItemVariant[] | undefined;
  boxResultErrorMsg: string | undefined;

  private sub = new Subscription();
  constructor(
    private boxService: BoxService,
    private route: ActivatedRoute,
    private auth: UserService
  ) {}

  ngOnInit(): void {
    this.box$ = this.route.params.pipe(
      switchMap((params) => this.boxService.getBoxDetails(params['id']))
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onOpenBoxClick(boxId: string) {
    this.loading = true;

    const openBoxInput: OpenBoxInput = {
      amount: 1,
      boxId
    };
    this.boxService
      .openBox(openBoxInput)
      .pipe(tap((x) => (this.loading = false)))
      .subscribe({
        next: ({ data, loading }) => {
          this.loading = loading;

          // workaround for update balance, after box opening
          // gql subscription walletUpdate doesn't work
          this.sub.add(this.auth.getCurrentUser().subscribe());

          if (data?.openBox) {
            this.boxResultItems = data.openBox.boxOpenings.map((x) => x.itemVariant);
          }
        },
        error: (err) => {
          this.loading = false;
          this.boxResultErrorMsg = err.message;
        }
      });
  }
}
