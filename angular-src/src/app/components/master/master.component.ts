import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';  
import {Router } from '@angular/router';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  navbarshow:boolean = true;
  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit() {    
    if(localStorage.getItem("user")==null)
      {
        this.router.navigate(['/home/login']);
      }
    this.dataService.currentnavbar.subscribe(data=>{
    this.navbarshow = data;
  })
  }

}
