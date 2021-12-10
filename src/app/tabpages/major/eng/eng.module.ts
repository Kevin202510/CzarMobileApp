import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngPageRoutingModule } from './eng-routing.module';

import { EngPage } from './eng.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngPageRoutingModule
  ],
  declarations: [EngPage]
})
export class EngPageModule {}
