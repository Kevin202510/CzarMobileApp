import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngPage } from './eng.page';

const routes: Routes = [
  {
    path: '',
    component: EngPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngPageRoutingModule {}
