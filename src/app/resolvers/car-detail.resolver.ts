// src/app/resolvers/car-detail.resolver.ts
import { ResolveFn }       from '@angular/router';
import { inject }          from '@angular/core';
import { forkJoin }        from 'rxjs';
import { CarsService }     from '../services/api/cars.service';
import { DriversService }  from '../services/api/drivers.service';
import { Car } from '../models/car.models';

// 1️⃣ Déclare l’interface
export interface CarDetailData {
  car: Car;
  allCars: Car[];
}

// 2️⃣ Implémente le resolver
export const carDetailResolver: ResolveFn<CarDetailData> = (route, state) => {
  const id = Number(route.paramMap.get('id'));
  const carsSvc    = inject(CarsService);

  return forkJoin({
    car:     carsSvc.getCar(id),
    allCars: carsSvc.getCars(),
  });
};
