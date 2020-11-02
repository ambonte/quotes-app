import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(1, 'Love For All, Hatred For None.', 'Khalifatul Masih III', 0,0,new Date(2020,11,14)),
    new Goal(2,'Change the world by being yourself. ',' Amy Poehler',0,0,new Date(2020,11,9)),
    new Goal(3,'Every moment is a fresh beginning. ','T.S Eliot',0,0,new Date(2020,11,12)),
    new Goal(4,'Never regret anything that made you smile. ','Mark Twain',0,0,new Date(2020,11,18)),
    new Goal(5,'Everything you can imagine is real.',' Pablo Picasso',0,0,new Date(2020,12,14)),
    new Goal(6,'Whatever you do, do it well.','Walt Disney',0,0,new Date(2020,11,14)),
  ];

  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  completeGoal(isComplete, index){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  goal: Goal[] = [
    new Goal(1, 'Love For All, Hatred For None.', 'Khalifatul Masih III', 0,0,new Date(2020,11,14)),
    new Goal(2,'Change the world by being yourself. ',' Amy Poehler',0,0,new Date(2020,11,9)),
    new Goal(3,'Every moment is a fresh beginning. ','T.S Eliot',0,0,new Date(2020,11,12)),
    new Goal(4,'Never regret anything that made you smile. ','Mark Twain',0,0,new Date(2020,11,18)),
    new Goal(5,'Everything you can imagine is real.',' Pablo Picasso',0,0,new Date(2020,12,14)),
    new Goal(6,'Whatever you do, do it well.','Walt Disney',0,0,new Date(2020,11,14)),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
