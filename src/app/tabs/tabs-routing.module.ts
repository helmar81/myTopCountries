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
            path: 'places',
            children:
              [
                {
                  path: '',
                  loadChildren: '../places/places.module#PlacesPageModule'
                }
              ]
          },
        {
          path: 'video',
          children:
            [
              {
                path: '',
                loadChildren: '../video/video.module#VideoPageModule'
              }
            ]
        },

        {
            path: 'london',
            children:
              [
                {
                  path: '',
                  loadChildren: '../london/london.module#LondonPageModule'
                }
              ]
          },

          {
            path: 'countries',
            children:
              [
                {
                  path: '',
                  loadChildren: '../countries/countries.module#CountriesPageModule'
                }
              ]
          },


        {
          path: '',
          redirectTo: '/discover',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/discover',
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


