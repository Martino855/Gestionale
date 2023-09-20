import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {
    path: 'private',
    loadChildren: () =>
      import('./pages/private/private.module').then(
        (m) => m.PrivateModule
      ),
      canActivate: [authGuard],
      data: {
          username: 'flora80',// NO !!
          password: '1234', // NO !!
      },
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./pages/public/public.module').then((m) => m.PublicModule),
  },
  { path: '', redirectTo: 'private', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
