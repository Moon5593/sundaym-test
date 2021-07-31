import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'investment',
        loadChildren: () => import('./investment/investment.module').then( m => m.InvestmentPageModule)
      },
      {
        path: 'match',
        redirectTo: '/app/home'
      },
      {
        path: 'deals',
        redirectTo: '/app/home'
      },
      {
        path: 'invest',
        redirectTo: '/app/home'
      },
      {
        path: 'refer',
        redirectTo: '/app/home'
      },
      {
        path: 'about',
        redirectTo: '/app/home'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
