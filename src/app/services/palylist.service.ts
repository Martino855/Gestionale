import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalylistService {
  private playlist: any[] = [];
  private playlist$: BehaviorSubject<any[]> = new BehaviorSubject(this.playlist);

  constructor() { }

  getPlaylist$(): Observable<any[]>{
    return this.playlist$.asObservable();
  }
  push(item:any){
    this.playlist.push(item);
    this.playlist$.next(this.playlist);
  }
  remove(item:any){
    //Cerca ed elimina dal palylist l'oggetto item
    //Emette il next su laylist$
  }



}
