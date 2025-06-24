import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SeasonsComponent } from './pages/seasons/seasons.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'seasons', component: SeasonsComponent },
  { path: 'historic', component: HistoricComponent },
  { path: 'cars/:id', component: CarDetailComponent }
];
