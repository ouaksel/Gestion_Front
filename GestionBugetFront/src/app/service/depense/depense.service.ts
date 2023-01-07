import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/config/api.url.config';
import { Depense } from 'src/app/shared/models/depense';

@Injectable({
  providedIn: 'root'
})

export class DepenseService {

  constructor(private http: HttpClient) { }


  getDepenses(): Observable<Depense[]>{
    return this.http.get<Depense[]>(API_URLS.DEPENSES_URL);
  }


  adddepense(depense : Depense): Observable<any>{
    console.log(depense);
    return this.http.post(API_URLS.DEPENSES_URL,depense);
}


updatedepense(depense : Depense): Observable<any>{
  return this.http.put(API_URLS.DEPENSES_URL,depense);
}


deletedepense(nom ?: Number): Observable<any>{
  return this.http.delete(API_URLS.DEPENSES_URL+`/${nom}`);
}
}
