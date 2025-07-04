import { Component, inject, OnInit } from '@angular/core';
import { CommonModule }               from '@angular/common';
import { FormsModule }                from '@angular/forms';
import { RouterModule, Router }       from '@angular/router';

import { CarsService }     from '../../services/api/cars.service';
import { TeamsService }    from '../../services/api/teams.service';
import { CircuitsService } from '../../services/api/circuits.service';
import { DriversService }  from '../../services/api/drivers.service';

import { Car }     from '../../models/car.models';
import { Team }    from '../../models/team.models';
import { Circuit } from '../../models/circuit.models';
import { Driver }  from '../../models/driver.models';

export type Entity = 'cars' | 'circuits' | 'pilotes' | 'equipes';

@Component({
  selector: 'app-dynamic-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dynamic-list.component.html',

})
export class DynamicListComponent implements OnInit {
  // état principal
  entityType: Entity = 'cars';

  cars: Car[]         = [];
  circuits: Circuit[] = [];
  drivers: Driver[]   = [];
  equipes: Team[]     = [];

  // recherche + filtre (pour cars uniquement)
  searchTerm: string       = '';
  selectedCategory: string = '';
  categories: string[]     = [];

  private carsSvc     = inject(CarsService);
  private circuitsSvc = inject(CircuitsService);
  private driversSvc  = inject(DriversService);
  private teamsSvc    = inject(TeamsService);
  private router      = inject(Router);

  ngOnInit() {
    this.loadData();
  }

  onEntityChange(event: Event) {
    this.entityType        = (event.target as HTMLSelectElement).value as Entity;
    this.searchTerm        = '';
    this.selectedCategory  = '';
    this.categories        = [];
    this.loadData();
  }

  private loadData() {
    switch (this.entityType) {
      case 'cars':
        this.carsSvc.getCars().subscribe(r => {
          this.cars = r.member;
          // catégories uniques pour <select>
          this.categories = Array.from(new Set(this.cars.map(c => c.category)));
        });
        break;

      case 'circuits':
        this.circuitsSvc.getCircuits().subscribe(r => this.circuits = r.member);
        break;

      case 'pilotes':
        this.driversSvc.getDrivers().subscribe(r => this.drivers = r.member);
        break;

      case 'equipes':
        this.teamsSvc.getTeams().subscribe(r => this.equipes = r.member);
        break;
    }
  }

  // getters pour filtrer sans pipe
  get filteredCars(): Car[] {
    return this.cars
      .filter(c =>
        c.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        (this.selectedCategory ? c.category === this.selectedCategory : true)
      );
  }

  // navigation
  showCarDetails(id: number) {
    this.router.navigate(['/cars', id]);
  }
  showDetail(id: number) {
    this.router.navigate([`/${this.entityType}`, id]);
  }

  // trackBy pour *ngFor
  trackByCar(_: number, c: Car): number     { return c.id; }
  trackByCircuit(_: number, c: Circuit): number { return c.id; }
  trackByDriver(_: number, d: Driver): number { return d.id; }
  trackByTeam(_: number, t: Team): number    { return t.id; }
}
