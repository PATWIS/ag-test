import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Box } from 'src/app/models/box';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'cgr-box-grid',
  templateUrl: './box-grid.component.html',
  styleUrls: ['./box-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxGridComponent implements OnInit {
  boxes$: Observable<Box[]> | undefined;
  constructor(private boxService: BoxService) {}

  ngOnInit(): void {
    this.boxes$ = this.boxService.getBoxes();
  }

  trackById(idx: number, value: Box) {
    return value && value.id;
  }
}
