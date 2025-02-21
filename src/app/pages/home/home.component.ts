import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  
  text : string = "'Hi, I'm Segun Ajiboye. Welcome to my Page!'";
  displayedText : string = '';
  index : number = 0;


  ngOnInit(): void {
    this.typeText();
  }

  typeText() {
    if (this.index < this.text.length) {
      this.displayedText += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), 100);
    }
  }
} 
