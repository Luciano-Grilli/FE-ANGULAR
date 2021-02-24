import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosFormComponent } from './components/alumnos/alumnos-form.component';

import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursoFormComponent } from './components/cursos/curso-form.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ExamenFormComponent } from './components/examenes/examen-form.component';
import { ExamenesComponent } from './components/examenes/examenes.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cursos'},
  { path: 'alumnos', component: AlumnosComponent }, 
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/form', component: CursoFormComponent },
    { path: 'cursos/form/:id', component: CursoFormComponent },
    { path: 'examenes', component: ExamenesComponent },
    { path: 'examenes/form', component: ExamenFormComponent },
    { path: 'examenes/form/:id', component: ExamenFormComponent },
    { path: 'alumnos/form', component: AlumnosFormComponent }, 
    { path: 'alumnos/form/:id', component: AlumnosFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
