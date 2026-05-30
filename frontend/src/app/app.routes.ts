import { Routes } from '@angular/router';
import { NotasListComponent } from './components/notas-list/notas-list.component';
import { NotasFormComponent } from './components/notas-form/notas-form.component';
import { NotasDetalleComponent } from './components/notas-detalle/notas-detalle.component';

export const routes: Routes = [
  { path: '', redirectTo: 'notas', pathMatch: 'full' },
  { path: 'notas', component: NotasListComponent },
  { path: 'notas/nueva', component: NotasFormComponent },
  { path: 'notas/editar/:id', component: NotasFormComponent },
  { path: 'notas/:id', component: NotasDetalleComponent },
];