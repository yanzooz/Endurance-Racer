import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { CARS, EnduranceCar } from '../../data/cars.data';
import { ColorService } from '../../services/color.services';
import { TEAMS, Team } from '../../data/teams.data';
import { DRIVERS, Driver } from '../../data/drivers.data';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private colorService = inject(ColorService);

  car?: EnduranceCar;
  team?: Team;
  drivers: Driver[] = [];
  activePilotIndex: number | null = null;

  prevCarId?: number;
  nextCarId?: number;
  id!: number;
  loading = true;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.loading = true;               // on affiche le loader
      this.loadCar(this.id);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }

  private loadCar(id: number): void {
    this.car = CARS.find(c => c.id === id);
    if (!this.car) {
      this.loading = false;
      return;
    }

    // Couleurs, équipe, pilotes
    this.colorService.setColors(this.car.colors);
    this.team    = TEAMS.find(t => t.id === this.car?.teamId);
    this.drivers = DRIVERS.filter(d => d.carId === this.car?.id);

    // Prev / Next
    const sorted = [...CARS].sort((a, b) => a.id - b.id);
    const idx    = sorted.findIndex(c => c.id === id);
    this.prevCarId = idx > 0                ? sorted[idx - 1].id : undefined;
    this.nextCarId = idx < sorted.length-1 ? sorted[idx + 1].id : undefined;

    // cache le loader après un court délai
    setTimeout(() => this.loading = false, 1000);
  }

  onMainImageLoad(): void {
    this.loading = false;
  }

  onHover(index: number): void {
    this.activePilotIndex = index;
  }

  onLeave(): void {
    this.activePilotIndex = null;
  }

}
