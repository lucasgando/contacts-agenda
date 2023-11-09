import { Component, WritableSignal, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';
import { LoginData } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  loadingSpinner: WritableSignal<boolean> = signal(false); 
  loginError: WritableSignal<boolean> = signal(false);

  loginData: LoginData = {
    username: '',
    password: ''
  };

  async login() {
    this.loginError.set(false);
    this.loadingSpinner.set(true);
    try{
      const res = await this.authService.login(this.loginData);
      if(res) {
        this.router.navigate(["/login"])
      }
      else {
        this.loginError.set(true);
      }
    } catch(err) {
      console.warn('Error registrando', err)
    }
    this.loadingSpinner.set(false);
    return;
  }
}
