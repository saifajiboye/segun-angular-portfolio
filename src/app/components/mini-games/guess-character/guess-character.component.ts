import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { BedrockService } from '../../../services/bedrock.service';

@Component({
  selector: 'app-guess-character',
  imports: [FormsModule, TitleCasePipe],
  templateUrl: './guess-character.component.html',
  styleUrl: './guess-character.component.css'
})
export class GuessCharacterComponent implements OnInit {
  word: string = '';
  category: string = '';
  scrambledWord: string = '';
  message: string = '';
  attempts: number = 0;
  userGuess: string = '';
  isLoading: boolean = false;
  showHint: boolean = false;

  constructor(private bedrockService: BedrockService) {}

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
    this.isLoading = true;
    this.bedrockService.getWord().subscribe({
      next: ({ word, category }) => {
        this.word = word.toLowerCase();
        this.category = category;
        this.scrambledWord = this.scrambleWord(this.word).toUpperCase();
        while (this.scrambledWord === this.word.toUpperCase()) {
          this.scrambledWord = this.scrambleWord(this.word).toUpperCase();
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('API error:', err);
        this.message = 'Failed to load word. Please try again.';
        this.isLoading = false;
      }
    });
  }

  checkWord() {
    if (this.userGuess.toLowerCase() === this.word) {
      this.message = `Congratulations! You guessed the word in ${this.attempts + 1} attempts`;
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
    this.showHint = false;
  }
}
