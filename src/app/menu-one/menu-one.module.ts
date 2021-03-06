import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuOnePage } from './menu-one.page';

const routes: Routes = [
  {
    path: '',
    component: MenuOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuOnePage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[
    MenuOnePage
  ]
})
export class MenuOnePageModule {}
