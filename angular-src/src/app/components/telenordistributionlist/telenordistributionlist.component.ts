import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
declare var Slider:any;

@Component({
  selector: 'app-telenordistributionlist',
  templateUrl: './telenordistributionlist.component.html',
  styleUrls: ['./telenordistributionlist.component.css']
})
export class TelenordistributionlistComponent implements OnInit {
  navbarshow: boolean = true;
  screenwidth:Number=0;

  rangeStart:String="100";
  rangeEnd:String="1500";
  rangeValue:String="";

   constructor(private dataService: DataService) {
    this.screenwidth = screen.width;
   }

  ngOnInit() {
    this.dataService.currentnavbar.subscribe((data:any) => {
      this.navbarshow = data;
    })
    var slider = new Slider('#ex2', {});
    slider.on('slide', (sliderVal) => {
        this.rangeValue = sliderVal;
        this.rangeStart = this.rangeValue.toString().split(',')[0];
        this.rangeEnd = this.rangeValue.toString().split(',')[1];
    })
  }

}
