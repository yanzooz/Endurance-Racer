import { Component, inject, OnInit } from '@angular/core';
import { CARS } from '../../data/cars.data';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { TEAMS,Team } from '../../data/teams.data';





@Component({
  selector: 'app-endurence-car-list',
  templateUrl: './endurence-car-list.component.html',
  styleUrls: ['./endurence-car-list.component.css'],
  imports: [RouterLink]
})
  export class EndurenceCarListComponent {
    cars= CARS;
    teams?= TEAMS; 
    private router = inject(Router);
   
    showCarDetails(id: number){
      this.router.navigate(['/cars',id])
    }

}
