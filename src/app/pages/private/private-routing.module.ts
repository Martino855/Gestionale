import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivateComponent } from './private/private.component';
import { UsersComponent } from './users/users.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { CompanyComponent } from './company/company.component';
import { DetailsComponent } from './company/details/details.component';
import { SettingComponent } from './company/setting/setting.component';
import { InvoicesComponent } from './company/invoices/invoices.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'user/:id', component: UserdetailComponent },
      { path: 'observables', component: ObservableComponent },
      {
        path: 'company',
        loadChildren: () => import('./company/company.module').then( m => m.CompanyModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
