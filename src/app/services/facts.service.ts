import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable, of} from 'rxjs';
import mockCategories from '../_mocks/categories.json';
import mockJoke from '../_mocks/joke.json';
import mockJokes from '../_mocks/jokes.json';

@Injectable({
  providedIn: 'root'
})

export class FactsService {

  constructor(private http: HttpClient) {}

  public getCategory(): Observable<any> {
    return of(mockCategories);
  }

  public getRandomJoke(params: Record<string, any> = {}): Observable<any> {
    let httpParams = new HttpParams();
    for (const [k, v] of Object.entries(params)) {
      httpParams = httpParams.set(k, v);
    }
    return of(mockJoke);
  }

  public getJokes(search: string): Observable<any> {
    const httpParams = new HttpParams()
      .set('query', search);
    return of(mockJokes);
  }

}
