import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ReactiveService } from 'src/app/services/reactive.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {
  observableClassico: Observable<any>;
  subject: Observable<any>;
  behaviourSubject: Observable<any>;

  showDiv: boolean = false;
  valoreObservable: any = null;
  valoreSubject: any;
  valoreBehaviourSubject: any;
  
  constructor(
    private reactiveService: ReactiveService
  ){
    this.observableClassico = this.reactiveService.getObservable();
    this.subject = this.reactiveService.getSubject();
    this.behaviourSubject = this.reactiveService.getBehaviourSubject();


    setTimeout(
      ()=>{
        this.sottoscrivi();
      },
      2000
    );
   

  }


  sottoscrivi(){
    this.observableClassico.subscribe(
      (r:any)=>{
        console.log('OBSERVABLE',r);
        this.valoreObservable = r;
      }
    );

    this.subject.subscribe(
      (r:any)=>{
        console.log('Subject',r);
        this.valoreSubject = r;
      }
    )

    this.behaviourSubject.subscribe(
      (r:any)=>{
        console.log('BehaviourSubject',r);
        this.valoreBehaviourSubject = r;
      }
    )
  }



  scatenaEvento(){
    console.log('Evento Scatenato');
    this.reactiveService.next();
  }

  scatenaEventoComponente(){
    const t = 'EVENTO DA COMPONENTE '+new Date().getTime();
    //this.behaviourSubject.next(t);
    //this.subject.next(t)
  }
}
