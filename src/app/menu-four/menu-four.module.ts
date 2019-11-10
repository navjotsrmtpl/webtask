import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuFourPage } from './menu-four.page';

const routes: Routes = [
  {
    path: '',
    component: MenuFourPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuFourPage],
  exports:[
    MenuFourPage
  ]
})
export class MenuFourPageModule {}
