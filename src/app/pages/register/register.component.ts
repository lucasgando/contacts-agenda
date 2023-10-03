import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);

  async register() {
    const res = await this.authService.register();
    if (res)
      this.router.navigate(["/contacts"]);
    return;
  }
}
