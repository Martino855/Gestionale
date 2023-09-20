import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { authGuard } from 'src/app/services/auth-guard.guard';

const routes: Routes = [
{ 
  path: 'login', component: LoginComponent,
},
{ path: 'subscribe', component: SubscribeComponent },
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
