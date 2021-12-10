import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilPageRoutingModule } from './fil-routing.module';

import { FilPage } from './fil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilPageRoutingModule
  ],
  declarations: [FilPage]
})
export class FilPageModule {}
