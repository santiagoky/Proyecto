import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './pages/inicio/inicio.module';
import { MenuComponent } from './Components/menu/menu.component';
import { FrontendModule } from './pages/frontend/frontend.module';
import { BackendModule } from './pages/backend/backend.module';
import { AdministrativoModule } from './pages/administrativo/administrativo.module';
import { ContactenosModule } from './pages/contactenos/contactenos.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    InicioModule,
    FrontendModule,
    BackendModule,
    AdministrativoModule,
    ContactenosModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
