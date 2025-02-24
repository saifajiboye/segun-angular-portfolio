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

    if (this.guess == this.number) {
      this.message = `Congratulations! You guessed the number in ${this.attempts + 1} attempts`;
      return;
    } else {
      this.attempts++
    } 

      
    if (this.guess > this.number) {
      this.message = 'Incorect! Enter another guess.<br>Hint: The Number is lower than your input';
      setTimeout(() => this.message = '', 3500);
    } else {
      this.message = 'Incorect! Enter another guess.<br> Hint: The Number is higher than your input';
      setTimeout(() => this.message = '', 3500);
    }
  }

  restart() {
    this.number = Math.floor(Math.random() * 100) + 1;
    this.guess = 0;
    this.message = '';
    this.attempts = 0;
  }
}
