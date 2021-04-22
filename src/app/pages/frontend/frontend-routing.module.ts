import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front/front.component';

const routes: Routes = [
  { path: 'front', component: FrontComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
