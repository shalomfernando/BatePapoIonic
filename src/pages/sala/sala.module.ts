import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalaPage } from './sala';
import {OrderModule} from "ngx-order-pipe";

@NgModule({
  declarations: [
    SalaPage,
  ],
  imports: [
    IonicPageModule.forChild(SalaPage),
    OrderModule
  ],
})
export class SalaPageModule {}
