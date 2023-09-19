import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubscribeComponent } from './subscribe/subscribe.component';


@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent,
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
