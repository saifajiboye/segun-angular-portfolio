import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  menuOpen=false;
  isMobile=false;
  
  constructor(public themeService: ThemeService) {
    this.checkScreenSize();
   }
@HostListener('window:resize', ['$event'])
checkScreenSize() {
  this.isMobile = window.innerWidth <= 768;
  if (!this.isMobile) {
    this.menuOpen = false;
  }
}

  toggleTheme() {
    this.themeService.toggle();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
 
}
