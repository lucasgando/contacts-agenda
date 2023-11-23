import { Component, WritableSignal, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RegisterData } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  loadingSpinner: WritableSignal<boolean> = signal(false);
  registerError: WritableSignal<boolean> = signal(false);

  registerData: RegisterData = {
    password: '',
    username: '',
    email: '',
  };

  async register() {
    this.loadingSpinner.set(true);
    this.registerError.set(false);
    try {
      const res = await this.authService.register(this.registerData);
      if (res) {
        this.authService.login({
          email: this.registerData.email,
          password: this.registerData.password,
        });
        this.router.navigate(['contacts']);
      } else this.registerError.set(true);
    } catch (error) {
      console.log(error);
    }
    this.loadingSpinner.set(false);
    return;
  }
}
