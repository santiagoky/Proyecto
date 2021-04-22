import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: '**', pathMatch: 'full', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
