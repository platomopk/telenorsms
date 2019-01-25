import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean;

  messaging:boolean;
  notification:boolean;
  hybrid:boolean;
  reporting:boolean;
  contacts:boolean;
  tracker:boolean;
  pricing:boolean;
  settings:boolean;
  dashboard:boolean;
  lea:boolean;
  master:boolean;
  digital:boolean;

  messagingclicked:boolean=false;
  notificationclicked:boolean=false;
  composeclicked:boolean=false;
  hybridclicked:boolean=false;
  addressbookclicked:boolean=false;
  trackerclicked:boolean=false;
  settingsclicked:boolean=false;
  masterclicked:boolean=false;


  constructor(private authService:AuthService) { 
    //this.loggedIn = false;
    if(localStorage.getItem("masterclicked")){
      this.masterclicked = 'true' == localStorage.getItem("masterclicked").toString().trim();
    }
    if(localStorage.getItem("messagingclicked")){
      this.messagingclicked = 'true' == localStorage.getItem("messagingclicked").toString().trim();
    }
    if(localStorage.getItem("composeclicked")){
      this.composeclicked = 'true' == localStorage.getItem("composeclicked").toString().trim();
    }
    if(localStorage.getItem("notificationclicked")){
      this.notificationclicked = 'true' == localStorage.getItem("notificationclicked").toString().trim();
    }
    if(localStorage.getItem("hybridclicked")){
      this.hybridclicked = 'true' == localStorage.getItem("hybridclicked").toString().trim();
    }
    if(localStorage.getItem("addressbookclicked")){
      this.addressbookclicked = 'true' == localStorage.getItem("addressbookclicked").toString().trim();
    }
    if(localStorage.getItem("trackerclicked")){
      this.trackerclicked = 'true' == localStorage.getItem("trackerclicked").toString().trim();
    }
    if(localStorage.getItem("settingsclicked")){
      this.settingsclicked = 'true' == localStorage.getItem("settingsclicked").toString().trim();
    }
  }

  onmessagingclicked(){
    this.messagingclicked = !this.messagingclicked;
    localStorage.setItem("messagingclicked",this.messagingclicked+"");
  }

  oncomposeclicked(){
    this.composeclicked = !this.composeclicked;
    localStorage.setItem("composeclicked",this.composeclicked+"");
  }

  onnotificationclicked(){
    this.notificationclicked = !this.notificationclicked;
    localStorage.setItem("notificationclicked",this.notificationclicked+"");
  }

  onhybridclicked(){
    this.hybridclicked = !this.hybridclicked;
    localStorage.setItem("hybridclicked",this.hybridclicked+"");
  }

  onaddressbookclicked(){
    this.addressbookclicked = !this.addressbookclicked;
    localStorage.setItem("addressbookclicked",this.addressbookclicked+"");
  }

  ontrackerclicked(){
    this.trackerclicked = !this.trackerclicked;
    localStorage.setItem("trackerclicked",this.trackerclicked+"");
  }

  onsettingsclicked(){
    this.settingsclicked = !this.settingsclicked;
    localStorage.setItem("settingsclicked",this.settingsclicked+"");
  }

  onmasterclicked(){
    this.masterclicked = !this.masterclicked;
    localStorage.setItem("masterclicked",this.masterclicked+"");
  }

  setRights(){
    const userStr = localStorage.getItem('user');
    const userObj = JSON.parse(userStr);
    const rights = userObj.rights;

    if(userObj.type == "sa"){
      this.master = true;
      return false;
    }else{
      this.master = false;
    }

    if(userObj.type == "lea"){
      this.lea = true;
      return false;
    }else{
      this.lea = false;
    }

    if(rights.includes('messaging')){
      this.messaging = true;
    }
    if(rights.includes('digital')){
      this.digital = true;
    }
    if(rights.includes('dashboard')){
      this.dashboard = true;
    }
    if(rights.includes('notification')){
      this.notification = true;
    }
    if(rights.includes('hybrid')){
      this.hybrid = true;
    }
    if(rights.includes('contacts')){
      this.contacts = true;
    }
    if(rights.includes('reporting')){
      this.reporting = true;
    }
    if(rights.includes('tracker')){
      this.tracker = true;
    }
    if(rights.includes('pricing')){
      this.pricing = true;
    }
    if(rights.includes('settings')){
      this.settings = true;
    }
  }

  ngOnInit() {
    this.setRights();

    // this.authService.getRights().subscribe(data =>{
    //   console.log(data);
    // });


    if( localStorage.getItem('id_loggedIn') != null && localStorage.getItem('id_loggedIn')=='true'){
      this.loggedIn=true;
    }else{
      this.loggedIn=false;
    }
  }

}
