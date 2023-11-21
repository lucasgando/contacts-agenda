import {Component, WritableSignal, inject, signal} from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router';
import {LoginData} from '../../interfaces/user';

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss']})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  loadingSpinner : WritableSignal < boolean > = signal(false);
  loginError : WritableSignal < boolean > = signal(false);

  loginData : LoginData = {
    username: '',
    password: ''
  };

  async login() {
    console.log("trying login");
    this.loginError.set(false);
    this.loadingSpinner.set(true);
    try {
      this.authService.login(this.loginData).then(res => {
        if (res) {
          this.router.navigate(["/contacts"])
        } else {
          this.loginError.set(true);
        }
      });
    } catch (err) {
      console.warn('Error iniciando sesion', err)
    }
    this.loadingSpinner.set(false);
    return;
  }
}
