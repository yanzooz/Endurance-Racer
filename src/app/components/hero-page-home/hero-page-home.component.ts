import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-page-home',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './hero-page-home.component.html',
})
export class HeroPageHomeComponent {
  bannerUrl = 'images/BanierreFerrariEndurence.jpeg';
  title = 'Endurance Racing'
}
