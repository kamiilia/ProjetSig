import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TramPage } from './tram.page';

import { TramComponentComponent } from '../tram-component/tram-component.component';

const routes: Routes = [
  {
    path: '',
    component: TramPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TramPage,TramComponentComponent]
})
export class TramPageModule {}
