import { Component, WritableSignal, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RegisterData } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);

  loadingSpinner: WritableSignal<boolean> = signal(false);
  registerError: WritableSignal<boolean> = signal(false);

  registerData: RegisterData = {
    password: '',
    username: '',
    name: '',
    lastName: ''
  };

  async register() {
    this.loadingSpinner.set(true);
    this.registerError.set(false);
    try {
      const res = await this.authService.register(this.registerData);
      if (res) 
        this.router.navigate(['contacts']);
      else
        this.registerError.set(true);
    } catch (error) {
      console.log(error);
    }
    return;
  }
}
