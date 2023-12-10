import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cep } from '../model/Cep';

@Injectable({
  providedIn: 'root'
})
export class ApiCepService {

  constructor(private http: HttpClient) { }

  getCep(valueCep: string): Observable<Cep> {
    return this.http.get<Cep>(`https://viacep.com.br/ws/${valueCep}/json/`, {responseType: 'json'} );
  }
}
