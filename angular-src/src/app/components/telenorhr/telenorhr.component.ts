import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-telenorhr',
  templateUrl: './telenorhr.component.html',
  styleUrls: ['./telenorhr.component.css']
})
export class TelenorhrComponent implements OnInit {

  navbarshow: boolean = true;
  screenwidth:Number=0;

   constructor(private dataService: DataService) {
    this.screenwidth = screen.width;
   }

  ngOnInit() {
    this.dataService.currentnavbar.subscribe((data:any) => {
      this.navbarshow = data;
    })
  }

}
