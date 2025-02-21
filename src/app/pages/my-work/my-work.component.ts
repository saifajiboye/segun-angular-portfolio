import { Component } from '@angular/core';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { AccomplishmentsComponent } from '../../components/accomplishments/accomplishments.component';

@Component({
  selector: 'app-my-work',
  imports: [AboutMeComponent, AccomplishmentsComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.css'
})
export class MyWorkComponent {

}
