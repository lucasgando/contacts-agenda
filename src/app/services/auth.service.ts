import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  async isLoggedIn():Promise<boolean> {
    return true;
  }

  async login() {
    console.warn("Login function not implemented");
    return true;
  }

  async register() {
    console.warn("Register function not implemented");
    return true;
  }

  logOut() {

  }
}
