import { Component, OnInit,ViewChild, SimpleChange } from '@angular/core';
import { DataService } from '../../services/data.service';
// import * as CanvasJS from './canvasjs.min';
declare var CanvasJS:any;
declare var Slider:any;
import { BaseChartDirective } from "../../../../node_modules/ng2-charts";

@Component({
  selector: 'app-telenorcampaigns',
  templateUrl: './telenorcampaigns.component.html',
  styleUrls: ['./telenorcampaigns.component.css']
})
export class TelenorcampaignsComponent implements OnInit {
  @ViewChild("baseChart") chart:BaseChartDirective;


  navbarshow: boolean = true;
  screenwidth:Number=0;

  public lineChartData: Array<any> = [
    {data:[1,2,3,10], label:'Total Sent'},
    {data:[2,5,10,2], label:'Total Delivered'}
  ];
  // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April'];
  // public lineChartLabels: Array<any> = [new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true })];
  public lineChartColors: Array<any> = [
    {
      // color
      backgroundColor: "rgba(28, 210, 228,0.40)",
      borderColor: "rgba(28, 210, 228,1)",
      pointBackgroundColor: "rgba(28, 210, 228,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "rgba(28, 210, 228,0.5)",
      pointHoverBorderColor: "rgba(28, 210, 228,0.5)"
    },
    {
      // alternate
      backgroundColor: "rgb(10, 158, 203,0.40)",
      borderColor: "rgb(10, 158, 203,1)",
      pointBackgroundColor: "rgb(10, 158, 203,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "rgb(10, 158, 203,0.5)",
      pointHoverBorderColor: "rgb(10, 158, 203,0.5)"
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = "line";

  public options:any={
    animation:{
      duration:0,
      easing:'linear'
    },
    legend: { 
      position:'bottom'
    }
    // elements: {
    //   line: {
    //       tension: 0, // disables bezier curves
    //   }
    // }   
  }

   constructor(private dataService: DataService) {
    this.screenwidth = screen.width;
   }

  ngOnInit() {
    this.dataService.currentnavbar.subscribe((data:any) => {
      this.navbarshow = data;
    })


 }

 toggleSent(){

  // console.log(this.chart.chart.data.datasets[0].)

 }

 toggleDelivered(){

 }

 toggleOpened(){

 }

}
