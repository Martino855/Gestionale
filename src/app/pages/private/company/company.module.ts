import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { DetailsComponent } from './details/details.component';
import { SettingComponent } from './setting/setting.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { companyRouter } from './company.routing';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    companyRouter
  ],
  declarations: [
    CompanyComponent,
    DetailsComponent, 
    SettingComponent, 
    InvoicesComponent,
  ]
})
export class CompanyModule { }
