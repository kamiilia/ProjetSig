import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'velo',
    loadChildren: () => import('./velo/velo.module').then(m => m.VeloPageModule)
  },
  {
    path: 'tram',
    loadChildren: () => import('./tram/tram.module').then(m => m.TramPageModule)
  },
  { path: 'tram', loadChildren: './tram/tram.module#TramPageModule' },
  { path: 'velo', loadChildren: './velo/velo.module#VeloPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
