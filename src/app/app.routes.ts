import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyWorkComponent } from './pages/my-work/my-work.component';
import { MiniGamesComponent } from './pages/mini-games/mini-games.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    
    {
        path: 'about-me', component: MyWorkComponent
    },
    {
        path: 'mini-games', component: MiniGamesComponent
    }
];
