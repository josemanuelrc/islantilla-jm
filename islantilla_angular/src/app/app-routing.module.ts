import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosClientesComponent } from './componentes/formularios-clientes/formularios-clientes.component';
import { FormularioReservaComponent } from './componentes/formulario-reserva/formulario-reserva.component';
import { FormularioGuardarArchivoEnReservaComponent } from './componentes/formulario-guardar-archivo-en-reserva/formulario-guardar-archivo-en-reserva.component';
import { ErrorComponent } from './error/error.component';
import { TablaReservasComponent } from './componentes/tabla-reservas/tabla-reservas.component';
import { DetalleReservaComponent } from './componentes/detalle-reserva/detalle-reserva.component';
import { InicioLoginComponent } from './componentes/inicio-login/inicio-login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio-login',
  },
  {
    path: 'inicio-login',
    component: InicioLoginComponent,
  },
  // {
  //   path: 'inicio-login',
  //   loadChildren: () =>
  //     import('./modules/my-module/my-module.module').then(
  //       (m) => m.MyModuleModule
  //     ),
  // },
  // {
  //   path: 'inicio-login',
  //   loadComponent: () =>
  //     import('./modules/my-component/my-component.component').then(
  //       (mod) => mod.MyComponentComponent
  //     ),
  // },
  {
    path: 'formulario-cliente',
    component: FormulariosClientesComponent,
  },
  {
    path: 'formulario-reserva',
    component: FormularioReservaComponent,
  },
  {
    path: 'formulario-reserva/:hab',
    component: FormularioReservaComponent,
  },
  {
    path: 'formulario-guardar',
    component: FormularioGuardarArchivoEnReservaComponent,
  },
  {
    path: 'tabla-reservas',
    component: TablaReservasComponent,
  },
  {
    path: 'detalle-reserva/:hab',
    component: DetalleReservaComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
