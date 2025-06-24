import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ColorService,CarColors } from '../../services/color.services';
import { Observable } from 'rxjs';

interface NavLink { path: string; label: string; }

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  menuOpen = false;
  links: NavLink[] = [
    { label: 'Home',     path: '/' },
    { label: 'Seasons',  path: '/seasons' },
    { label: 'Historic', path: '/historic' }
  ];

  hoveredLink: NavLink | null = null;
  title= 'Endurance Racing';

  color$!: Observable<CarColors> ;
  private colorService = inject(ColorService)
  
  ngOnInit(): void {
      this.color$ = this.colorService.colors$;
  }


}