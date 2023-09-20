import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PalylistService {
  private playlist: any[] = [];
  private playlist$: BehaviorSubject<any[]> = new BehaviorSubject(
    this.playlist
  );

  constructor() {
    const playlist = window.localStorage.getItem('playlist')
      ? window.localStorage.getItem('playlist')
      : null;
    if (playlist) {
      this.playlist = JSON.parse(playlist);
      this.playlist$.next(this.playlist);
    } else {
      this.playlist = [];
      this.playlist$ = new BehaviorSubject(this.playlist);
    }
  }

  getPlaylist$(): Observable<any[]> {
    return this.playlist$.asObservable();
  }
  push(item: any) {
    this.playlist.push(item);
    this.playlist$.next(this.playlist);
    window.localStorage.setItem('playlist', JSON.stringify(this.playlist));
  }
  remove(item: any) {
    this.playlist = this.playlist.filter((i: any) => i != item);
    this.playlist$.next(this.playlist);
    window.localStorage.setItem('playlist', JSON.stringify(this.playlist));
  }
}
