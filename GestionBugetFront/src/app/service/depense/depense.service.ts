import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/config/api.url.config';
import { Depense } from 'src/app/shared/models/depense.model';
@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  constructor(private http: HttpClient) { }


  getDepenses(): Observable<Depense[]>{
    return this.http.get<Depense[]>(API_URLS.DEPENSES_URL);
  }
}

