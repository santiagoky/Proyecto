import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactenosComponent } from './contactenos/contactenos.component';

const routes: Routes = [
  { path: 'contactenos', component: ContactenosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactenosRoutingModule { }
