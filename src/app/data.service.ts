import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor(private http: HttpClient) { }

  changeGoal(goal) {
    this.goals.next(goal)
  }
  
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
