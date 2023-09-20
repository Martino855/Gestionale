import { CanActivateFn } from '@angular/router';
import { UserService } from './user.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  return userService.authUser(route.data['username']);
};
