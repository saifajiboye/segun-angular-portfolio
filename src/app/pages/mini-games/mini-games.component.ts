import { Component, OnInit } from '@angular/core';
import { GuessNumberComponent } from '../../components/mini-games/guess-number/guess-number.component';
import { GuessCharacterComponent } from '../../components/mini-games/guess-character/guess-character.component';

@Component({
  selector: 'app-mini-games',
  imports: [GuessNumberComponent, GuessCharacterComponent],
  templateUrl: './mini-games.component.html',
  styleUrl: './mini-games.component.css'
})
export class MiniGamesComponent implements OnInit{
    ngOnInit(): void {
    const  audio = new Audio('assets/game_sound.mp3')
        audio.play();
        audio.loop=true;
      
    }
}
