// Spring + Angular: Paso4 -> Controlador Módulo
// Añadimos el FormsModule y HttpClientModule

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulariosClientesComponent } from './componentes/formularios-clientes/formularios-clientes.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormularioReservaComponent } from './componentes/formulario-reserva/formulario-reserva.component';
import { FormularioGuardarArchivoEnReservaComponent } from './componentes/formulario-guardar-archivo-en-reserva/formulario-guardar-archivo-en-reserva.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { TablaReservasComponent } from './componentes/tabla-reservas/tabla-reservas.component';
import { InicioLoginComponent } from './componentes/inicio-login/inicio-login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioLoginComponent,
    FormulariosClientesComponent,
    FormularioReservaComponent,
    FormularioGuardarArchivoEnReservaComponent,
    TablaReservasComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
