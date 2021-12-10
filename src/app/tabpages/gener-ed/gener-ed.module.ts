import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerEdPageRoutingModule } from './gener-ed-routing.module';

import { GenerEdPage } from './gener-ed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerEdPageRoutingModule
  ],
  declarations: [GenerEdPage]
})
export class GenerEdPageModule {}
