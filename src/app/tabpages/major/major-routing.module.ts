import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MajorPage } from './major.page';

const routes: Routes = [
  {
    path: '',
    component: MajorPage
  },
  {
    path: 'eng',
    loadChildren: () => import('./eng/eng.module').then( m => m.EngPageModule)
  },
  {
    path: 'fil',
    loadChildren: () => import('./fil/fil.module').then( m => m.FilPageModule)
  },
  {
    path: 'math',
    loadChildren: () => import('./math/math.module').then( m => m.MathPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MajorPageRoutingModule {}
