import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Person } from '../model/Person';
import { Observable } from 'rxjs';
import { Church } from '../model/Church';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllMembers():Observable<Person[]>{
      return this.http.get<Person[]>('http://localhost:8080/membros');
  }

  getAllChurchs():Observable<Church[]>{
    return this.http.get<Church[]>('http://localhost:8080/igrejas');
}

 createPerson(person:Person):Observable<Person>{
  return this.http.post<Person>('http://localhost:8080/membros', person)
 }

 getByNameCongregation(nameCongregation:string):Observable<Church>{
  return this.http.get<Church>(`http://localhost:8080/igrejas/congregacao/${nameCongregation}`)
 }

}
