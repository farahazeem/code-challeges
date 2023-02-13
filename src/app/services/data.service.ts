import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/interfaces/User';
import { Product } from '../shared/interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  BASE_URL: string = 'https://dummyjson.com';

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL + '/users');
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL + '/products');
  }

  getUserByID(id: string): Observable<User> {
    return this.http.get<User>(this.BASE_URL + '/users/' + id);
  }

  getProductByID(id: string): Observable<Product> {
    return this.http.get<Product>(this.BASE_URL + '/products/' + id);
  }

}
