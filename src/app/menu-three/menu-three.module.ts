import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuThreePage } from './menu-three.page';

const routes: Routes = [
  {
    path: '',
    component: MenuThreePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuThreePage],
  exports:[
    MenuThreePage
  ]
})
export class MenuThreePageModule {}
