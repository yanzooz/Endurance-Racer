import { Component } from '@angular/core';
import { DynamicListComponent } from "../../components/dynamic-list/dynamic-list.component";


@Component({
  selector: 'app-seasons',
  imports: [ DynamicListComponent],
  template: `
  <app-dynamic-list></app-dynamic-list>
  `,
})
export class SeasonsComponent {


}
