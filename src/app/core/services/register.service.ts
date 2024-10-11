import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../modules/Users';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUlr = "http://localhost:8080/api/users"


  constructor(private http: HttpClient) { }



}
