import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesEdPage } from './profes-ed.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesEdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesEdPageRoutingModule {}
