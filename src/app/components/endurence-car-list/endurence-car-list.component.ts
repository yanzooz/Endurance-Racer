import { Component, inject, OnInit } from '@angular/core';
import { CommonModule }               from '@angular/common';
import { RouterModule, Router }       from '@angular/router';
import { CarsService } from '../../services/api/cars.service';
import { TeamsService } from '../../services/api/teams.service';
import { Car } from '../../models/car.models';
@Component({
  selector: 'app-endurence-car-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './endurence-car-list.component.html',
  styleUrls: ['./endurence-car-list.component.css'],
})
export class EndurenceCarListComponent implements OnInit {
  private carsService  = inject(CarsService);
  private teamsService = inject(TeamsService);
  private router       = inject(Router);

  cars: Car[]    = [];
  loading = false;

  ngOnInit(): void {
    this.loading = true;
      // puis les voitures
      this.carsService.getCars().subscribe(cars => {
        this.cars = cars.member;
        console.log(cars.member)
        // construire la liste unique des catégories
        this.loading = false;
      });

  }

  showCarDetails(id: number) {
    this.router.navigate(['/cars', id]);
  }
}
