import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'menu-one', loadChildren: './menu-one/menu-one.module#MenuOnePageModule' },
  // { path: 'menu-one', loadChildren: './menu-one/menu-one.module#MenuOnePageModule' },
  // { path: 'menu-two', loadChildren: './menu-two/menu-two.module#MenuTwoPageModule' },
  // { path: 'menu-three', loadChildren: './menu-three/menu-three.module#MenuThreePageModule' },
  // { path: 'menu-four', loadChildren: './menu-four/menu-four.module#MenuFourPageModule' },
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {path:'home',component:HomePageComponent},
  {path:'pageOne',component:PageOneComponent},
  {path:'pageTwo',component:PageTwoComponent},
  {path:'pageThree',component:PageThreeComponent},
  {path:'pageFour',component:PageFourComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
