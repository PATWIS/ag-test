import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { Box } from '../models/box';
import { OpenBoxInput } from '../models/openBox';
import { BoxService } from '../services/box.service';

@Component({
  selector: 'cgr-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss']
})
export class BoxDetailsComponent implements OnInit {
  box$: Observable<Box> | undefined;
  loading = false;
  boxResultItem: any;
  boxResultErrorMsg: string | undefined;
  constructor(private boxService: BoxService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.box$ = this.route.params.pipe(
      switchMap((params) => this.boxService.getBoxDetails(params['id'])),
      tap((x) => console.log(x))
    );
  }

  onOpenBoxClick(boxId: string) {
    // this.loading = true;
    // const openBoxInput:OpenBoxInput = {
    //   amount: 0,
    //   boxId
    // }
    // this.boxService
    //   .openBox(openBoxInput)
    //   .pipe(tap((x) => (this.loading = false)))
    //   .subscribe({
    //     next: (result) => {
    //       console.log(result.data?.openBox);
    //       this.loading = false;
    //       // if (Boolean(result.data?.openBox)) {
    //       //   this.openingBoxResult = result.data?.openBox.boxOpenings;
    //       // }
    //     },
    //     error: (err) => {
    //       this.loading = false;
    //       this.boxResultErrorMsg = err.message;
    //     }
    //   });
  }
}
