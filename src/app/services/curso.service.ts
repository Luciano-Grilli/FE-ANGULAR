import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_ENDPOINT } from '../config/app';
import { Curso } from '../models/curso';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService extends CommonService<Curso>{

  constructor(http: HttpClient) {
    super(http);
   }

  protected baseEndPoint = BASE_ENDPOINT + '/cursos';
}
