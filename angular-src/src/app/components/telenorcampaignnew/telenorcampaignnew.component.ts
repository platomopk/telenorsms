import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { DataService } from '../../services/data.service';
declare var Slider:any;

@Component({
  selector: 'app-telenorcampaignnew',
  templateUrl: './telenorcampaignnew.component.html',
  styleUrls: ['./telenorcampaignnew.component.css']
})
export class TelenorcampaignnewComponent implements OnInit {
  navbarshow: boolean = true;
  screenwidth:Number=0;
  rangeStart:String="100";
  rangeEnd:String="1500";
  rangeValue:String="";

  date: Date = new Date();
  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'dd-MM-yyyy,hh:mm a',
      defaultOpen: false
  }

  
  // _self = this;

  uploadboxshow:boolean = false;
  nlbshow:boolean = false;
  contentfilterbox:boolean = false;
  blocklistbox:boolean = false;
  inputcontent:boolean = true;
  choosetemplate:boolean = false;
  existinglist:boolean = false;
  scheduleimmediately:boolean = true;
  scheduleafterbroadcast:boolean = false;
  datetimepicker:boolean = false;
  datetimecalledby:string = "";

  inputcontenttxt:string="Entered text will show like this.";

   constructor(private dataService: DataService) {
    this.screenwidth = screen.width;
   }

  ngOnInit() {
    this.dataService.currentnavbar.subscribe((data:any) => {
      this.navbarshow = data;
    });
    
      var slider = new Slider('#ex2', {});
      slider.on('slide', (sliderVal) => {
          this.rangeValue = sliderVal;
          this.rangeStart = this.rangeValue.toString().split(',')[0];
          this.rangeEnd = this.rangeValue.toString().split(',')[1];
      })



  }

  ngAfterViewChecked(){

  }

  ngAfterViewInit(){
    // var slider = new Slider('#ex2', {});
    // slider.on('slide', (sliderVal) => {
    //     this.rangeValue = sliderVal;
    //     this.rangeStart = this.rangeValue.toString().split(',')[0];
    //     this.rangeEnd = this.rangeValue.toString().split(',')[1];
    // })

    
  }

  toggleUpload(){
    this.uploadboxshow = !this.uploadboxshow;
  }

  togglenewlist(){
    this.nlbshow = !this.nlbshow;
    var id = document.getElementById("newlist") as HTMLDivElement;
    


    if(this.nlbshow){
      id.style.display = "block";
      // id.setAttribute("style","display:block");
    }else{
      id.style.display = "none";
      // id.setAttribute("style","display:none");
    }
    console.log(this.nlbshow)
  }

  togglecontentfilter(){
    this.contentfilterbox = !this.contentfilterbox;
  }

  toggleblocklist(){
    this.blocklistbox = !this.blocklistbox;
  }

  showInputContent(){
    this.inputcontent = true;
    this.choosetemplate = false;
  }

  showChooseTemplate(){
    this.inputcontent = false;
    this.choosetemplate = true;
  }

  toggleExisting(){
    this.existinglist = !this.existinglist;
  }

  showScheduleImmediately(){
      this.scheduleimmediately = true;
      this.scheduleafterbroadcast = false;
      this.schedulerecurringbroadcast = false;

      this.cleardatetimepicker();
  }

  showScheduleAfterBroadcast(){
    this.scheduleimmediately = false;
    this.scheduleafterbroadcast = true;
    this.schedulerecurringbroadcast = false;

    this.cleardatetimepicker();
  }

  schedulerecurringbroadcast:boolean = false;
  showScheduleRecurringBroadcast(){
    this.schedulerecurringbroadcast = true;
    this.scheduleimmediately = false;
    this.scheduleafterbroadcast = false;

    this.cleardatetimepicker();
  }

  onDateSelect(e){
    console.log("Date" + e);
    this.datetimepicker = false;
    console.log(this.datetimecalledby + " " + this.date);

    if(this.datetimecalledby === 'sicsdt'){
      this.changesicsdtvalues(e);
    }

    if(this.datetimecalledby === 'sicedt'){
      this.changesicedtvalues(e);
    }

    if(this.datetimecalledby === 'sabcsdt'){
      this.changesabcsdtvalues(e);
    }

    if(this.datetimecalledby === 'sabcedt'){
      this.changesabcedtvalues(e);
    }

    if(this.datetimecalledby === 'srbcedt'){
      this.changesrbcedtvalues(e);
    }

    if(this.datetimecalledby === 'srbcsdt'){
      this.changesrbcsdtvalues(e);
    }
  }

  showdatetimepicker(value){
    this.cleardatetimepicker();

    this.datetimepicker = true;
    this.datetimecalledby = value;
  }

  cleardatetimepicker(){
    this.datetimepicker = false;
    this.datetimecalledby = "";
  }

  sicsd:Number=1;
  sicsm:String="";
  sicsy:Number=2020;
  sicst:String="";
  changesicsdtvalues(date:Date){
    
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var time = date.getHours() + ":" + date.getMinutes();

    this.sicsd = day;
    this.sicsm = monthNames[monthIndex];
    this.sicsy = year;
    this.sicst = date.toLocaleTimeString();
  
    //return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  siced:Number=1;
  sicem:String="";
  sicey:Number=2020;
  sicet:String="";
  changesicedtvalues(date:Date){
    
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var time = date.getHours() + ":" + date.getMinutes();

    this.siced = day;
    this.sicem = monthNames[monthIndex];
    this.sicey = year;
    this.sicet = date.toLocaleTimeString();
  
    //return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  sabcsd:Number=1;
  sabcsm:String="";
  sabcsy:Number=2020;
  sabcst:String="";
  changesabcsdtvalues(date:Date){
    
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var time = date.getHours() + ":" + date.getMinutes();

    this.sabcsd = day;
    this.sabcsm = monthNames[monthIndex];
    this.sabcsy = year;
    this.sabcst = date.toLocaleTimeString();
  
    //return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  sabced:Number=1;
  sabcem:String="";
  sabcey:Number=2020;
  sabcet:String="";
  changesabcedtvalues(date:Date){
    
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var time = date.getHours() + ":" + date.getMinutes();

    this.sabced = day;
    this.sabcem = monthNames[monthIndex];
    this.sabcey = year;
    this.sabcet = date.toLocaleTimeString();
  
    //return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }



  srbced:Number=1;
  srbcem:String="";
  srbcey:Number=2020;
  srbcet:String="";
  srbcet2:String="";
  srbcet3:String="";
  changesrbcedtvalues(date:Date){
    
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var time = date.getHours() + ":" + date.getMinutes();

    this.srbced = day;
    this.srbcem = monthNames[monthIndex];
    this.srbcey = year;
    this.srbcet = date.toLocaleTimeString();
    this.srbcet2 = date.toLocaleTimeString();
    this.srbcet3 = date.toLocaleTimeString();
  
    //return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  srbcsd:Number=1;
  srbcsm:String="";
  srbcsy:Number=2020;
  srbcst:String="";
  srbcst2:String="";
  srbcst3:String="";
  changesrbcsdtvalues(date:Date){
    
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var time = date.getHours() + ":" + date.getMinutes();

    this.srbcsd = day;
    this.srbcsm = monthNames[monthIndex];
    this.srbcsy = year;
    this.srbcst = date.toLocaleTimeString();
    this.srbcst2 = date.toLocaleTimeString();
    this.srbcst3 = date.toLocaleTimeString();
  
    //return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  url:string="";
  generateLink(){
    this.url="shorturl.at/pzMN5";
  }

}
