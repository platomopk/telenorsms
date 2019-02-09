import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-hybrid',
  templateUrl: './hybrid.component.html',
  styleUrls: ['./hybrid.component.css']
})
export class HybridComponent implements OnInit {
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
