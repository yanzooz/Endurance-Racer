// src/app/api/drivers.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Driver } from '../../models/driver.models';

@Injectable({ providedIn: 'root' })
export class DriversService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/drivers`;

  /** Récupère tous les pilotes */
  getDrivers(): Observable<any> {
    return this.http
      .get<{ 'hydra:member': Driver[] }>(this.apiUrl)
     
  }

  /** Récupère un pilote par son ID */
  getDriver(id: number): Observable<Driver> {
    return this.http.get<Driver>(`${this.apiUrl}/${id}`);
  }
}

