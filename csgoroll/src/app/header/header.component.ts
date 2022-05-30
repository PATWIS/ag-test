import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'cgr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showLoginBtn = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLogInClick() {
    this.authService.login();
  }
}
