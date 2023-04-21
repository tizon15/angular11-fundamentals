import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverLogin: any;
  loginInvalid = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  login(formValues: { userName: string; password: string }) {
    this.authService
      .loginUser(formValues.userName, formValues.password)
      .subscribe((resp) => {
        if (!resp) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['events']);
        }
      });
  }
  cancel() {
    this.router.navigate(['events']);
  }
}
