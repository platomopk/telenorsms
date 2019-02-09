import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  navbarshow:boolean = true;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentnavbar.subscribe(data=>{
      this.navbarshow = data;
    })
  }

}
