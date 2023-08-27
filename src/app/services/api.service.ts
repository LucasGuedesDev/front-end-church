import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Person } from '../model/Person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllMembers():Observable<Person[]>{
      return this.http.get<Person[]>('http://localhost:8080/membros');
  }
}
