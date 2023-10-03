import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  async login() {
    const res = await this.authService.login();
    if (res)
      this.router.navigate(["/contacts"]);
    return;
  }
}
