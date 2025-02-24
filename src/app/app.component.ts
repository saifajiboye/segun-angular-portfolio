import { Component } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
declare let gtag: Function;
  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'segun-angular-portfolio';

 constructor(private router:Router) {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      gtag('event', 'page_view',{ page_path: event.urlAfterRedirects});
    }
  })
 }


}
