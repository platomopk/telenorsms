import { Component, OnInit } from '@angular/core';import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-telenorautoresponse',
  templateUrl: './telenorautoresponse.component.html',
  styleUrls: ['./telenorautoresponse.component.css']
})
export class TelenorautoresponseComponent implements OnInit {

  navbarshow: boolean = true;
  screenwidth:Number=0;
  choosetemplate:boolean = false;

   constructor(private dataService: DataService) {
    this.screenwidth = screen.width;
   }

  ngOnInit() {
    this.dataService.currentnavbar.subscribe((data:any) => {
      this.navbarshow = data;
    })
  }

  chooseTemplateBtn(){
    this.choosetemplate = !this.choosetemplate;
  }

}
