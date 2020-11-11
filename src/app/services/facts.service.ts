import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FactsService {

  constructor(private http: HttpClient) {}

  public getCategory(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/categories`);
  }

  public getRandomJoke(params: Record<string, any> = {}): Observable<any> {
    let httpParams = new HttpParams();
    for (const [k, v] of Object.entries(params)) {
      httpParams = httpParams.set(k, v);
    }
    return this.http.get(`${environment.apiUrl}/random`, {params: httpParams});
  }

  public getJokes(search: string): Observable<any> {
    const httpParams = new HttpParams()
      .set('query', search);
    return this.http.get(`${environment.apiUrl}/search`, {params: httpParams});
  }

}
