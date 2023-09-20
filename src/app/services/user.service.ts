import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users =
    {
      username: "flora80",
      password: 1234
    }

  constructor(private route:Router) { }

  authUser(username: string,): Promise<boolean> {
    return new Promise(
      (ok, ko) => {
        setTimeout(
          () => {
            if (this.users.username == username) {
              ok(true);
            }
            else this.route.navigate(['public'])
            1000
          }
        )
      },
    )
  }
}
