import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { CurrentUser } from '../graphql/currentUser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'cgr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUser$: Observable<CurrentUser | null> | undefined;
  public balance$: Observable<number> | undefined;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser$ = this.authService.getCurrentUser();

    this.balance$ = this.currentUser$.pipe(
      map((x) => x?.wallets.map((x) => x.amount).reduce((prev, curr) => prev + curr, 0) || 0)
    );
  }

  onLogInClick() {
    this.authService.login();
  }
}
