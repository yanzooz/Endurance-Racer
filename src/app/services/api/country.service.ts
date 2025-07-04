import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Country } from '../../models/country.models';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/countries`;

  /** Récupère tous les pays */
  getCountries(): Observable<Country[]> {
    return this.http
      .get<{ 'hydra:member': Country[] }>(this.apiUrl)
      .pipe(map(response => response['hydra:member']));
  }


  /** Récupère un pays par son code */
  getCountry(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/${code}`);
  }
}
