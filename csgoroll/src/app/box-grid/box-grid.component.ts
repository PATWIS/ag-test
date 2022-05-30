import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Box } from '../models/box';

import { BoxService } from '../services/box.service';

@Component({
  selector: 'cgr-box-grid',
  templateUrl: './box-grid.component.html',
  styleUrls: ['./box-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxGridComponent implements OnInit {
  boxes$: Observable<Box[]> | undefined;
  constructor(
    private boxService: BoxService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.boxes$ = this.boxService.getBoxes().pipe(tap((x) => console.log(x)));
  }

  trackById(idx: number, value: Box) {
    return value && value.id;
  }

  onLoadMoreClick() {
    console.log('todo');
  }

  goToBoxDetails(id: string) {
    console.log('click');

    this.router.navigate(['/boxes', id], { relativeTo: this.route });
  }
}
