import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { PalylistService } from 'src/app/services/palylist.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user$: Observable<User>;
  playlist: any[] = [];

  constructor(
    private userService: UserService,
    private playlistService: PalylistService
  ) {
    this.user$ = this.userService.getUser$();

    this.playlistService.getPlaylist$().subscribe((r: any[]) => {
      this.playlist = r;
    });
  }

  setAntonio() {
    this.userService.setUser({
      name: 'Antonio',
      surname: 'Barbatelli',
      level: 500,
      loggedIn: true,
      permissions: [],
    });
  }

  setPippo() {
    this.userService.setUser({
      name: 'Pippo',
      surname: 'Paperino',
      level: 900,
      loggedIn: true,
      permissions: [],
    });
  }

  addItem() {
    this.playlistService.push(new Date().getTime());
  }
  remove(item: any) {
    this.playlistService.remove(item);
  }
}
