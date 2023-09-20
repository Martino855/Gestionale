import { RouterModule, Routes } from "@angular/router";
import { CompanyComponent } from "./company.component";
import { DetailsComponent } from "./details/details.component";
import { SettingComponent } from "./setting/setting.component";
import { InvoicesComponent } from "./invoices/invoices.component";

export const companyRoutes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      { path: 'details', component: DetailsComponent },
      { path: 'settings', component: SettingComponent },
      { path: 'invoices', component: InvoicesComponent },
      { path: '', redirectTo: 'details', pathMatch: 'full' },
    ],
  },
]

export const companyRouter = RouterModule.forChild(companyRoutes);