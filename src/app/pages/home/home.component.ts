import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroPageHomeComponent } from '../../components/hero-page-home/hero-page-home.component';
import { ColorService } from '../../services/color.services';
import { EndurenceCarListComponent } from '../../components/endurence-car-list/endurence-car-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroPageHomeComponent, EndurenceCarListComponent],
  template: `
  <app-hero-page-home></app-hero-page-home>
  <app-endurence-car-list></app-endurence-car-list>
  `
})
export class HomeComponent implements OnInit{
  bannerUrl = 'images/BanierreFerrariEndurence.jpeg';
  title = 'EndurenceRacer'
  
  private colorService = inject(ColorService)

  ngOnInit(): void {
      this.colorService.setColors({
      primaryColor: '#101828',  
      secondaryColor: 'red' 
      })
  }
}
