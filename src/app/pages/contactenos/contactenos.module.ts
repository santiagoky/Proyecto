import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactenosRoutingModule } from './contactenos-routing.module';
import { ContactenosComponent } from './contactenos/contactenos.component';


@NgModule({
  declarations: [ContactenosComponent],
  imports: [
    CommonModule,
    ContactenosRoutingModule
  ]
})
export class ContactenosModule { }
