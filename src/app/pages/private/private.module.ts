import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { PrivateComponent } from './private/private.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ObservableComponent } from './observable/observable.component';


@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    UserdetailComponent,
    PrivateComponent,
    ObservableComponent,
   
  ],
  imports: [CommonModule, PrivateRoutingModule, NgbModule],
})
export class PrivateModule {}
