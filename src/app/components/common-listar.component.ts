import { Component, Directive, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2'
import { Base } from '../models/base';
import { CommonService } from '../services/common.service';

@Directive()
export abstract class CommonListarComponent<E extends Base, S extends CommonService<E>> implements OnInit {


  titulo: string;
  lista: E[];
  protected nombreModel: string;

  totalRegistros= 0;
  paginaActual= 0;
  totalPorPagina= 4;
  pageSizeOptions: number[] =[5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(protected services: S) { }

  ngOnInit(): void {
    this.calcularRango();
  }

  paginar(event: PageEvent): void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calcularRango();
  }

  private calcularRango(){
    
    this.services.listarPaginas(this.paginaActual.toString(),this.totalPorPagina.toString())
    .subscribe(p => 
      {
        this.lista = p.content as E[];
        this.totalRegistros = p.totalElements as number;
        this.paginator._intl.itemsPerPageLabel = 'Registros por página';
      });
  }

  public eliminar(e: E): void {

    Swal.fire({
      title: 'Cuidado!',
      text: `¿seguro que quieres eliminar a ${e.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.services.eliminar(e.id).subscribe(() => {
          this.calcularRango();
          Swal.fire('Eliminado: ', `${this.nombreModel} ${e.nombre} eliminado con exito`, 'success');
        });

      }
    });
  }
}
