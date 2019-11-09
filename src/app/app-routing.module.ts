import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'menu-one', loadChildren: './menu-one/menu-one.module#MenuOnePageModule' },
  { path: 'menu-one', loadChildren: './menu-one/menu-one.module#MenuOnePageModule' },
  { path: 'menu-two', loadChildren: './menu-two/menu-two.module#MenuTwoPageModule' },
  { path: 'menu-three', loadChildren: './menu-three/menu-three.module#MenuThreePageModule' },
  { path: 'menu-four', loadChildren: './menu-four/menu-four.module#MenuFourPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
