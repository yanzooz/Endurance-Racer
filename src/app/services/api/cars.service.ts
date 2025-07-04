// src/app/api/cars.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Car } from '../../models/car.models';

@Injectable({ providedIn: 'root' })
export class CarsService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/cars`;

  /** Récupère la liste de toutes les voitures (JSON-LD Hydra) */
  getCars(): Observable<any> {
    return this.http
      .get<{ 'hydra:member': Car[] }>(this.apiUrl)
      
  }

  /** Récupère une voiture par son ID */
  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }
}
