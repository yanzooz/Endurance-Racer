import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CarColors {
  primaryColor: string;
  secondaryColor: string;
}

@Injectable({ providedIn: 'root' })
export class ColorService {
  // Valeur par défaut (noir/blanc)
  private colorsSubject = new BehaviorSubject<CarColors>({
    primaryColor: '#1e1e1e',
    secondaryColor: '#ffffff'
  });

  // Observable que consommera la navbar
  colors$ = this.colorsSubject.asObservable();

  // Méthode à appeler depuis CarDetailComponent
  setColors(colors: CarColors) {
    this.colorsSubject.next(colors);
  }
}
