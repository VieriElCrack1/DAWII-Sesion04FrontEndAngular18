import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deporte } from '../model/deporte';

@Injectable({
  providedIn: 'root'
})
export class DeporteService {

  private url = "http://localhost:8090/url/util";
  

  constructor(private http : HttpClient) { }

  listaDeporte() : Observable<Deporte[]> {
    return this.http.get<Deporte[]>(this.url + "/deporte");
  }
}
