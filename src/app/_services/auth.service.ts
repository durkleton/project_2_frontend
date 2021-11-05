import { Injectable } from '@angular/core';
// HTTP Client, Headers, and Observable for testing, typed requests, error handling, and responses
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Authentication endpoint?
const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
// Sends signup, login HTTP POST requests to back-end
export class AuthService {
  constructor(private http: HttpClient) { }
// Login Method
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }
// Register Method
  register(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      email,
      password
    }, httpOptions);
  }
}
