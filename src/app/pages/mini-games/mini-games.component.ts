import { Component } from '@angular/core';
import { GuessNumberComponent } from '../../components/mini-games/guess-number/guess-number.component';

@Component({
  selector: 'app-mini-games',
  imports: [GuessNumberComponent],
  templateUrl: './mini-games.component.html',
  styleUrl: './mini-games.component.css'
})
export class MiniGamesComponent {

}
