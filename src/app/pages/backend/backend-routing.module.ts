import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendComponent } from './backend/backend.component';

const routes: Routes = [
  { path: 'backend', component: BackendComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
