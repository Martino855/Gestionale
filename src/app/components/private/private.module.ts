import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { CompanyComponent } from './company/company.component';
import { PrivateComponent } from './private/private.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    UserdetailComponent,
    CompanyComponent,
    PrivateComponent,
  ],
  imports: [CommonModule, PrivateRoutingModule],
})
export class PrivateModule {}
