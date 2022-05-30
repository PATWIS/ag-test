import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cgr-user-balance',
  templateUrl: './user-balance.component.html',
  styleUrls: ['./user-balance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBalanceComponent {
  @Input() balance: number | undefined;
}
