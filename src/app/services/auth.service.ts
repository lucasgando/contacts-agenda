import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData, RegisterData } from '../interfaces/user';
import { API } from '../constants/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router: Router = inject(Router);
  token: string | null;
  loggedIn: boolean;
  constructor() {
    this.token = localStorage.getItem('token');
    this.loggedIn = this.token != null;
  }

  async login(loginData: LoginData): Promise<boolean> {
    return false;
    const res = await fetch(API + 'authentication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    if (!res.ok) return false;
    const givenToken: string = await res.text();
    localStorage.setItem('token', givenToken);
    this.token = givenToken;
    this.loggedIn = true;
    return true;
  }

  async register(registerData: RegisterData): Promise<boolean> {
    const res = await fetch(API + 'user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });
    return res.status == 302;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.router.navigate(['/']);
  }

  isAdmin(): boolean {
    return true
  }
}
