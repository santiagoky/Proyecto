import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativoRoutingModule } from './administrativo-routing.module';
import { AdministrativoComponent } from './administrativo/administrativo.component';


@NgModule({
  declarations: [AdministrativoComponent],
  imports: [
    CommonModule,
    AdministrativoRoutingModule
  ]
})
export class AdministrativoModule { }
