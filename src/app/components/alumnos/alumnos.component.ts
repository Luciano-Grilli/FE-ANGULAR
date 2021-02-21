import { Component, OnInit, ViewChild } from '@angular/core';
import { BASE_ENDPOINT } from 'src/app/config/app';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent extends CommonListarComponent<Alumno, AlumnoService> implements OnInit {

  baseEndPoint = BASE_ENDPOINT + '/alumnos';

  constructor(services: AlumnoService) { 
    super(services);
    this.titulo = 'Listado de alumno';
    this.nombreModel = Alumno.name;
  }

  
}
