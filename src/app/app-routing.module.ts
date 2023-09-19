import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'private',
    loadChildren: () =>
      import('./components/private/private.module').then(
        (m) => m.PrivateModule
      ),
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./components/public/public.module').then((m) => m.PublicModule),
  },
  { path: '', redirectTo: 'private', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
