import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VeloPage } from './velo.page';
import { VeloComponentComponent } from '../velo-component/velo-component.component';


const routes: Routes = [
  {
    path: '',
    component: VeloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VeloPage,VeloComponentComponent]
})
export class VeloPageModule {}
