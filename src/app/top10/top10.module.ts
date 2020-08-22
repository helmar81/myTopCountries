import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Top10Page } from './top10.page';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CountriesComponent } from '../countries/countries.component';

const routes: Routes = [
  {
    path: '',
    component: Top10Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],


  declarations: [Top10Page],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Top10PageModule {}
