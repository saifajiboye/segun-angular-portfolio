import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private darkMode: boolean = false;
  constructor() { 
    const savedMode = localStorage.getItem('darkMode');
    this.darkMode = savedMode === 'true';
    this.applyTheme();
  }
  toggle() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
    
    this.applyTheme();
  }
  applyTheme() {
    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  isDarkMode() {
    return this.darkMode;
  }
}

