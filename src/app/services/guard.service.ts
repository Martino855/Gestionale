import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  users =
    {
      username: "flora80",
      password: 1234
    }

  constructor() { }

  authUser(username: string,): Promise<boolean> {
    return new Promise(
      (ok, ko) => {
        setTimeout(
          () => {
            if (this.users.username == username) {
              ok(true);
            }
            1000
          }

        )
      },
    )
  }
}
