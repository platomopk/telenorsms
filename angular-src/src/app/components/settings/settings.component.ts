import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  navbarshow:boolean = true;
  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit() {    
    
    if(localStorage.getItem("user")==null)
      {
        this.router.navigate(['/home/login']);
      }
    this.dataService.currentnavbar.subscribe((data:any)=>{
    this.navbarshow = data;
  })
  }

}
