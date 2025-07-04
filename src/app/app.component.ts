import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { EndurenceCarListComponent } from './components/endurence-car-list/endurence-car-list.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent,RouterOutlet],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
`
})
export class AppComponent {
    
}
