import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './models/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private http: HttpClient) { }

  public listar(): Observable<any>{
    return this.http.get('http://localhost:8000/api/profile/1');
  }
}
