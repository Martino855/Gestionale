import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { CompanyComponent } from './company/company.component';
import { PrivateComponent } from './private/private.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './company/details/details.component';
import { SettingComponent } from './company/setting/setting.component';
import { InvoicesComponent } from './company/invoices/invoices.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    UserdetailComponent,
    CompanyComponent,
    PrivateComponent,
    DetailsComponent,
    SettingComponent,
    InvoicesComponent,
  ],
  imports: [CommonModule, PrivateRoutingModule, NgbModule],
})
export class PrivateModule {}
