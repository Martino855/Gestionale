import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { PalylistService } from 'src/app/services/palylist.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent {
  user$: Observable<User>;
  playlist$: Observable<any[]>;
  playlist: any[] = [];

  constructor(
    private userService: UserService,
    private playlistService: PalylistService,
    private router: Router
    ){
    this.user$ = this.userService.getUser$();
    this.playlist$ = this.playlistService.getPlaylist$();

    this.playlist$.subscribe(
      (r: any[])=>{
        this.playlist = r;
      }
    );

  }

  logout(){
    this.userService.setUser(
      {
        loggedIn: false,
        name: "",
        surname: "",
        level: 0,
        permissions: []
      }
    );
    this.router.navigate(['/public']);
  }

}
