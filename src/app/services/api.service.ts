import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../model/Cars';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<Member[]>{
      return this.http.get<Member[]>('http://localhost:8080/carros');
  }
}
