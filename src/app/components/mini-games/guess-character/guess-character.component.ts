import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-character',
  imports: [FormsModule],
  templateUrl: './guess-character.component.html',
  styleUrl: './guess-character.component.css'
})
export class GuessCharacterComponent implements OnInit {
  words = [
    'apple',
    'banana',
    'cherry',
    'date',
    'elderberry', 
    'fig',
    'grape',
    'honeydew',
    'kiwi',
    'sweet',
    'tangerine',
    'watermelon',
    'soccer',
    'basketball',
    'football',
    'baseball',
    'hockey',
    'tennis',
    'golf',
    'volleyball',
    'rugby',
    'cricket',
    'badminton',
    'table tennis',
    'swimming',
    'cycling',
    'cap',
    'hat',
    'helmet',
    'hood',
    'scarf',
    'gloves',
    'mittens',
    'hold',
    'bag',
    'backpack', 
    'briefcase',
    'purse',
    'wallet',
    'belt',
    'sash',
    'radio',
    'television',
    'computer',
    'laptop',
  ]
  word: string = '';
  scrambledWord: string = '';
  message: string = '';
  attempts: number = 0; 
  userGuess: string = '';

  ngOnInit() {
    this.generateWord();

  }

  scrambleWord(word: string) {
    let arr = word.replace(/\s+/g, '').split('');
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  }

  generateWord() {
    this.word = this.words[Math.floor(Math.random() * this.words.length)];
    this.scrambledWord = this.scrambleWord(this.word).toUpperCase();

    while (this.scrambledWord === this.word.toUpperCase()) {
      this.scrambledWord = this.scrambleWord(this.word).toUpperCase();
    }
  }

  checkWord() {
    
    if (this.userGuess.toLowerCase() === this.word) {
      this.message = `Congratulations! You guessed the word in ${this.attempts} attempts`;

      return;
    
    } else {
      this.attempts++;
      this.message = 'Try again';
      setTimeout(() => this.message = '', 2000);
    }
  }

  restart() {
    this.generateWord();
    this.message = '';
    this.attempts = 0;
    this.userGuess = '';
  }
}
