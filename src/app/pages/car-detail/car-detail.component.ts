// src/app/components/car-detail/car-detail.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule }              from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../models/car.models';
import { ColorService } from '../../services/color.services';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  private route        = inject(ActivatedRoute);
  private router       = inject(Router);
  private colorService = inject(ColorService);

  car?: Car;
  prevCarId?: number;
  nextCarId?: number;
  activePilotIndex: number | null = null; 

  loading = true; 

  ngOnInit(): void {
    const start = Date.now();
    // On s'abonne aux données préchargées par le resolver
    this.route.data.subscribe(({ detail }) => {
      console.log('resolver detail =', detail);
      const { car, allCars } = detail as { car: Car; allCars: any };
      this.car     = car;

      // On applique les couleurs via le service
      this.colorService.setColors({
        primaryColor: car.primaryColor,
        secondaryColor: car.secondaryColor
      });

      // Précédent / Suivant (sur la propriété hydra:member)
      const members = allCars.member || allCars['hydra:member'] || [];
      const sorted  = [...members].sort((a, b) => a.id - b.id);
      const idx     = sorted.findIndex((c: Car) => c.id === car.id);
      this.prevCarId = idx > 0                ? sorted[idx - 1].id : undefined;
      this.nextCarId = idx < sorted.length-1 ? sorted[idx + 1].id : undefined;

      // Scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

      // Garde le loader au moins 1 000 ms
      const elapsed = Date.now() - start;
      const wait    = Math.max(0, 1000 - elapsed);
      setTimeout(() => this.loading = false, wait);
    });
  }

  showCarDetails(id: number): void {
    this.router.navigate(['/cars', id]);
  }

  onHover(index: number): void {
    this.activePilotIndex = index;
  }

  onLeave(): void {
    this.activePilotIndex = null;
  }
}
