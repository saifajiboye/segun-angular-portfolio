import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AccomplishmentsComponent } from './components/accomplishments/accomplishments.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutMeComponent, AccomplishmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'segun-angular-portfolio';
}
