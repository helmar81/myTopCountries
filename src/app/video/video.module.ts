import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { VideoPage } from './video.page';

const routes: Routes = [
  {
    path: '',
    component: VideoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],

  declarations: [VideoPage]
})
export class VideoPageModule {}
