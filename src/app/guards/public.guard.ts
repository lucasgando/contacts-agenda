import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

export const publicGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  if (auth.isLoggedIn()) {
    const router = inject(Router);
    router.navigate(['contacts']);
    return false;
  }
  return true;
};
