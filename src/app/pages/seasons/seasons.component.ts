import { Component } from '@angular/core';
import { EndurenceCarListComponent } from '../../components/endurence-car-list/endurence-car-list.component';


@Component({
  selector: 'app-seasons',
  imports: [EndurenceCarListComponent],
  template: `
  <app-endurence-car-list></app-endurence-car-list>
  `,
})
export class SeasonsComponent {


}
