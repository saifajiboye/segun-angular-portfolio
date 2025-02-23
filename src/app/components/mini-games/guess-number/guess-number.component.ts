import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-number',
  imports: [FormsModule],
  templateUrl: './guess-number.component.html',
  styleUrl: './guess-number.component.css'
})
export class GuessNumberComponent {
  number: number = Math.floor(Math.random() * 100) + 1;
  guess: number = 0;
  message: string = '';
  attempts: number = 0;
 

  

  checkNumber() {
    this.attempts++;
    if (this.guess == this.number) {
      this.restart();
      this.message = `Congratulations! You guessed the number in ${this.attempts} attempts`;
    } else if (this.guess > this.number) {
      this.message = 'Try a lower number';
    } else {
      this.message = 'Try a higher number';
    }
  }

  restart() {
    this.number = Math.floor(Math.random() * 100) + 1;
    this.guess = 0;
    this.message = '';
    this.attempts = 0;
  }
}
