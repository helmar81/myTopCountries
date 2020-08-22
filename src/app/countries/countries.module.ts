import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CountriesPage } from './countries.page';
import { CountriesComponent } from './countries.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatSliderModule } from '@angular/material/slider';

const routes: Routes = [
  {
    path: '',
    component: CountriesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DragDropModule,
    MatSliderModule
  ],
  declarations: [CountriesPage, CountriesComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class CountriesPageModule {}
