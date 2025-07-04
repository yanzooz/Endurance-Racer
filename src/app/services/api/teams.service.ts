// src/app/api/teams.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Team } from '../../models/team.models';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/teams`;

  /** Récupère toutes les équipes */
  getTeams(): Observable<any> {
    return this.http
      .get<{ 'hydra:member': Team[] }>(this.apiUrl)
  }

  /** Récupère une équipe par son ID */
  getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.apiUrl}/${id}`);
  }
}

