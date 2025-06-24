import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ColorService,CarColors } from '../../services/color.services';
import { Observable } from 'rxjs';

interface NavLink { path: string; label: string; }


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit{
  menuOpen = false;
  
  links: NavLink[] = [
    { path: '/',  label: 'Home' },
    { path: '/seasons' ,label: 'Seasons' },
    { path: '/historic' ,label: 'Historic' }
  ];

  hoveredLink: NavLink | null = null;

  title= 'Endurance Racing';

  colors$!: Observable<CarColors>;
  private colorService = inject(ColorService)

  ngOnInit(): void {
        this.colors$ = this.colorService.colors$;
  }

}