import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Box } from 'src/app/models/box';

@Component({
  selector: 'cgr-box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxCardComponent implements OnInit {
  @Input() box: Box | undefined;
  @Input() showOpenBtn = false;
  @Input() showLinkBtn = false;

  constructor() {}

  ngOnInit(): void {}
}
