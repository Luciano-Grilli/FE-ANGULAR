import { Injectable } from '@angular/core';
import { Examen } from '../models/examen';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ExamenService extends CommonService<Examen>{

  protected baseEndPoint = 'http://localhost:8090/api/alumnos';
}
