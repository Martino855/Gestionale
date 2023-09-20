import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUser, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;
  private user$: BehaviorSubject<User>;


  constructor(private route: Router) { 
    const user = window.localStorage.getItem('user') ? window.localStorage.getItem('user') : null; 
      if(user){
        this.user = new User(JSON.parse(user));
      }else{
        this.user =  new User({
          loggedIn: false,
          name: "",
          surname: "",
          level: 0,
          permissions: []
        });
      }
      this.user$ = new BehaviorSubject(this.user);
  }

  authUser(username: string,): Promise<boolean> {
    return new Promise(
      (ok, ko) => {
        setTimeout(
          () => {
            ok(true);
          }
        )
        1000
      }
    )
  }

  getUser() {
    return this.user;
  }
  getUser$(){
    return this.user$.asObservable();
  }

  setUser(u:IUser){
    this.user = new User(u);
    this.user$.next(this.user);
    window.localStorage.setItem('user', JSON.stringify(this.user));
  }

}

