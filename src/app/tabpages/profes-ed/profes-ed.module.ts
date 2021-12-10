import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesEdPageRoutingModule } from './profes-ed-routing.module';

import { ProfesEdPage } from './profes-ed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesEdPageRoutingModule
  ],
  declarations: [ProfesEdPage]
})
export class ProfesEdPageModule {}
