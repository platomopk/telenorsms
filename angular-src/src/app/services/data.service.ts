import { Injectable } from '@angular/core';
import { BehaviorSubject }  from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  navbarshowed = new BehaviorSubject<boolean>(window.screen.width < 450 ? false:true);

  currentnavbar = this.navbarshowed.asObservable();


  constructor() { }

  changenavbar(option:boolean){
    this.navbarshowed.next(option);
  }

}
