import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { BedrockService } from '../../../services/bedrock.service';

@Component({
  selector: 'app-guess-character',
  imports: [FormsModule, TitleCasePipe],
  templateUrl: './guess-character.component.html',
  styleUrl: './guess-character.component.css'
})
export class GuessCharacterComponent implements OnInit, OnDestroy {
  word: string = '';
  category: string = '';
  scrambledWord: string = '';
  message: string = '';
  userGuess: string = '';
  isLoading: boolean = false;
  showHint: boolean = false;
  showInstructions: boolean = false;

  timeLeft: number = 90;
  score: number = 0;
  gameActive: boolean = false;
  gameOver: boolean = false;
  private timer: any;

  constructor(private bedrockService: BedrockService) {}

  ngOnInit() {
    this.generateWord();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  private clearTimer() {
    if (this.timer) clearInterval(this.timer);
  }

  startGame() {
    this.score = 0;
    this.timeLeft = 90;
    this.gameActive = true;
    this.gameOver = false;
    this.message = '';
    this.showHint = false;
    this.userGuess = '';
    this.generateWord();
    this.clearTimer();
    this.timer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.timeLeft = 0;
        this.endGame();
      }
    }, 1000);
  }

  endGame() {
    this.clearTimer();
    this.gameActive = false;
    this.gameOver = true;
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

  skipWord() {
    this.timeLeft = Math.max(0, this.timeLeft - 15);
    this.showHint = false;
    this.userGuess = '';
    this.message = '';
    if (this.timeLeft === 0) { this.endGame(); return; }
    this.generateWord();
  }

  revealHint() {
    this.showHint = true;
    this.timeLeft = Math.max(0, this.timeLeft - 8);
    if (this.timeLeft === 0) this.endGame();
  }

  checkWord() {
    if (!this.gameActive) return;
    if (this.userGuess.toLowerCase() === this.word) {
      this.score++;
      this.message = '✅ Correct!';
      this.userGuess = '';
      this.showHint = false;
      setTimeout(() => this.message = '', 1000);
      this.generateWord();
    } else {
      this.message = '❌ Try again';
      setTimeout(() => this.message = '', 1500);
    }
  }

  get timerColor(): string {
    if (this.timeLeft > 30) return '#22c55e';
    if (this.timeLeft > 10) return '#f0a500';
    return '#ff4d4d';
  }
}
