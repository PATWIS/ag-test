import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cgr-user-balance',
  templateUrl: './user-balance.component.html',
  styleUrls: ['./user-balance.component.scss'],
})
export class UserBalanceComponent {
  @Input() balance: number | undefined;
}
