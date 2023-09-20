import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService {

  private observableClassico: Observable<any>;
  private observer?: Observer<any>;
  private subject: Subject<any>;
  private behaviourSubject: BehaviorSubject<any>;

  constructor() {
    this.observableClassico = new Observable(
      (observer: Observer<any>) => {
        this.observer = observer;
      }
    );

    this.subject = new Subject();
    this.behaviourSubject = new BehaviorSubject('Valore Iniziale');

    setTimeout(
      () => {
        this.next();
      },
      1000
    );



  }


  getObservable(): Observable<any> {
    return this.observableClassico;
  }

  getSubject(): Observable<any> {
    return this.subject.asObservable();
  }

  getBehaviourSubject(): Observable<any> {
    return this.behaviourSubject.asObservable();
  }

  next() {
    const p = new Date().getTime();

    if (this.observer)
      this.observer.next(p);
    this.subject.next(p);
    this.behaviourSubject.next(p);


  }



}
