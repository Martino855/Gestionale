import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent,
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
  ]
})
export class PublicModule { }
