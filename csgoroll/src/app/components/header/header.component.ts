import { Component, OnInit } from '@angular/core';
import { SubscriptionResult } from 'apollo-angular';
import { Observable } from 'rxjs';
import { CurrentUser } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'cgr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUser$: Observable<CurrentUser | null> | undefined;
  public balance$: Observable<number> | undefined;
  public walletSubs$: Observable<SubscriptionResult<any> | null> | undefined;
  public show$: Observable<boolean> | undefined;
  constructor(private authService: UserService) {}

  ngOnInit(): void {
    this.currentUser$ = this.authService.getCurrentUser();
    this.balance$ = this.authService.balance$;
  }

  onLogInClick() {
    this.authService.login();
  }
}
