import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontComponent } from './front/front.component';


@NgModule({
  declarations: [FrontComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
