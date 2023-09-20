import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';
import { inject } from '@angular/core';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const toastr = inject(ToastrService);


  const u: User = userService.getUser();
  if(u.loggedIn){
    return true
  }else{
    console.log('NON LOGGATO', u);
    toastr.error('Non sei Autenticato');
    router.navigate(['/public']);
    return false;
  }

};
