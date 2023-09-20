import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private route:Router,
    private userService: UserService
    ){}
  users =
    {
      username: "user@mail.com",
      password: 'passwordServreta',
    };


    login(){
      //Chiama un WS remoto inviando User e Password
      //Ottiene risposta e se ok, crea lo stato utente e va avanti, altrimenti da errore
      setTimeout(
        ()=>{
          //LOGIN OK
          this.userService.setUser({
            name: 'Nome Utente',
            surname: "Cognome Utente",
            level: 500,
            loggedIn: true,
            permissions: []
          });
          this.route.navigate(['../private'])



        },
        800
      );
    }

  
}
