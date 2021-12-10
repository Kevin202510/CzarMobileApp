import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilPage } from './fil.page';

const routes: Routes = [
  {
    path: '',
    component: FilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilPageRoutingModule {}
