import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'videojuegos-component', component: VideojuegosComponent},
  { path: 'test-component', component: EncuestaComponent},
  { path: 'membresia-component', component: ResultadosComponent},
  { path: 'galeria-component', component: GaleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
