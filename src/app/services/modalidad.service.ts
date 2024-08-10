import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modalidad } from '../model/modalidad';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  private url = "http://localhost:8090/url/modalidad";

  constructor(private http : HttpClient) { }

  listaModalidad() : Observable<Modalidad[]> {
    return this.http.get<Modalidad[]>(this.url);
  }

  insertaModalidad(modalidad : Modalidad) : Observable<any> {
    return this.http.post(this.url, modalidad);
  }
}
