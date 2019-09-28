import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-bolos',
    pathMatch: 'full'
  },
  { path: 'list-bolos', loadChildren: './list-bolos/list-bolos.module#ListBolosPageModule' },
  { path: 'bolo-details/:id', loadChildren: './bolo-details/bolo-details.module#BoloDetailsPageModule' },
  { path: 'cart/:id', loadChildren: './cart/cart.module#CartPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
