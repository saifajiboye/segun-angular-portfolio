import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AboutMeComponent {

  openResume() {
    window.open('assets/Segun_Ajiboye_Resume.pdf', '_blank');
  }

  sendEmail() {
    window.location.href ='mailto:saifajiboye@gmail.com?subject=Inquiry&body=Hello%20Segun,%20I%20would%20like%20to%20discuss...', '_blank';
  }


}
