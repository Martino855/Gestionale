import { CanActivateFn } from '@angular/router';
import { GuardService } from './guard.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const userService = inject(GuardService);
  return userService.authUser(route.data['username']);
};
