import { Component, OnInit } from '@angular/core';

import { MessagingService } from "../../services/messaging.service";
import { AuthService } from "../../services/auth.service";
import {AES, enc} from 'crypto-js'

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {

  mainArray: any = [];
  quickarr: any = [];
  bulkarr: any = [];
  digitalarr: any = [];
  intervalid: any;

  _date:Date=new Date();

  spinner: boolean = true;

  localemail:String='';

  userObj:any = {};

  constructor(
    private messagingService: MessagingService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userObj = JSON.parse(localStorage.getItem("user"))
    this.localemail = this.authService.getSavedEmail();
    //console.log(AES.decrypt('U2FsdGVkX1+22scdPaZqa42X/QEVMK0ChS+9qemeqrdtpo0BRnzMH7+6nRXPsCqCdI3DXOgGf1tpUxWJNNJwRQ==', 'a@a.com').toString(enc.Utf8));
     //console.log(this.lineChartData, this.lineChartLabels);
    
    //this.lineChartLabels.push(Date.now());
    this.getsent();
    this.intervalid = setInterval(() => {
      this.getsent();
      console.log('sent');
      
    }, 1000 * 5);
  }

  ngAfterViewInit(){


  }

  ngOnDestroy(){
    console.log('sent destroyed');
    
    clearInterval(this.intervalid)
  }

  getsent() {
    this.spinner = true;
    this.messagingService
      .getallsentquicklimit(this.authService.getSavedEmail())
      .subscribe((data:any)=> {
        this.spinner = false;
        if (data.success) {
          this.quickarr = [];
          // data.data.forEach(element => {
          //   if(this.localemail != ''){
          //     element.msg = AES.decrypt(element.msg, this.localemail.toString()).toString(enc.Utf8)
          //   }
          // });

          data.data.forEach(element => {
            if(this.userObj.type == 'omo'){
              element.msg = element.encrypted == true? AES.decrypt(element.msg, this.userObj.enckey).toString(enc.Utf8):element.msg
            }else{
              element.msg = element.encrypted == true? AES.decrypt(element.msg, this.localemail.toString()).toString(enc.Utf8):element.msg
            }
          });
          


          this.quickarr = data.data;
          console.log('sent quick',this.quickarr);

          this.messagingService
            .getalloutboxbulklimit(this.authService.getSavedEmail())
            .subscribe((data:any)=> {
              if (data.success) {
                this.bulkarr = [];
                // data.data.forEach(element => {
                //   if(this.localemail != ''){
                //     element.msg = AES.decrypt(element.msg, this.localemail.toString()).toString(enc.Utf8)
                //   }
                // });
                this.bulkarr = data.data;
                // console.log(this.bulkarr);

                this.messagingService
                  .getalloutboxdigitallimit(this.authService.getSavedEmail())
                  .subscribe((data:any)=> {
                    if (data.success) {
                      this.digitalarr = [];
                      this.digitalarr = data.data;
                      // console.log(this.digitalarr);
                      
                    }
                  });
              }
            });
        }
      });
  }

}
