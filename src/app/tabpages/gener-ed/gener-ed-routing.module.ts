import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerEdPage } from './gener-ed.page';

const routes: Routes = [
  {
    path: '',
    component: GenerEdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerEdPageRoutingModule {}
