import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },

  { path: 'london', loadChildren: './london/london.module#LondonPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'countries', loadChildren: './countries/countries.module#CountriesPageModule' },
  { path: 'material', loadChildren: './material/material.module#MaterialPageModule' },
  { path: 'discover', loadChildren: './discover/discover.module#DiscoverPageModule' },


];
@NgModule({
  imports:
    [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
  exports:
    [
      RouterModule
    ]
})
export class AppRoutingModule {}
