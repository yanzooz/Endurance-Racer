// src/app/api/teams.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Circuit } from '../../models/circuit.models';

@Injectable({ providedIn: 'root' })
export class CircuitsService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/circuits`;

  /** Récupère toutes les équipes */
  getCircuits(): Observable<any> {
    return this.http.get<{ 'hydra:member': Circuit[] }>(this.apiUrl);
  }

  /** Récupère une équipe par son ID */
  getCircuit(id: number): Observable<Circuit> {
    return this.http.get<Circuit>(`${this.apiUrl}/${id}`);
  }
}

