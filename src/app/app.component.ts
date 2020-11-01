import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goal: Goal[] = [
    new Goal(1, 'Love For All, Hatred For None.', 'Khalifatul Masih III',new Date(2019,9,14)),
    new Goal(2,'Change the world by being yourself. ',' Amy Poehler',new Date(2019,6,9)),
    new Goal(3,'Every moment is a fresh beginning. ','T.S Eliot',new Date(2019,1,12)),
    new Goal(4,'Never regret anything that made you smile. ','Mark Twain',new Date(2019,11,18)),
    new Goal(5,'Everything you can imagine is real.',' Pablo Picasso',new Date(2019,2,14)),
    new Goal(6,'Whatever you do, do it well.','Walt Disney',new Date(2019,3,14)),
  ];
 
}