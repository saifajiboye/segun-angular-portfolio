import { Component } from '@angular/core';
import { AboutMeComponent } from '../../components/about-me/about-me.component';


@Component({
  selector: 'app-my-work',
  imports: [AboutMeComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.css'
})
export class MyWorkComponent {

}
