import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    UserdetailComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
