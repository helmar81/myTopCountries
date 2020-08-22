import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
      [
        {
          path: 'home',
          children:
            [
              {
                path: '',
                loadChildren: '../home/home.module#HomePageModule'
              }
            ]
        },
        {
          path: 'top10',
          children:
            [
              {
                path: '',
                loadChildren: '../top10/top10.module#Top10PageModule'
              }
            ]
        },
        {
          path: 'tab3',
          children:
            [
              {
                path: '',
                loadChildren: '../video/video.module#VideoPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}


