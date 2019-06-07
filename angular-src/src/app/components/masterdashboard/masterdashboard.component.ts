import { Component, OnInit } from '@angular/core';
import { MessagingService } from "../../services/messaging.service";

@Component({
  selector: 'app-masterdashboard',
  templateUrl: './masterdashboard.component.html',
  styleUrls: ['./masterdashboard.component.css']
})
export class MasterdashboardComponent implements OnInit {

  constructor(private msgService:MessagingService) { }

  showspinnerzong = false;
  zong:any={}

  ngOnInit() {
    this.zongapicreds();
  }

  zongapicreds(){
    this.showspinnerzong = true;
        this.msgService.getzongapicreds().subscribe((data:any)=>{
          this.showspinnerzong = false;
          if(data.success){
            this.zong = data.data;
            console.log(this.zong);
            
          }else{
            console.log(data.error)
          }
        })
  }

}
