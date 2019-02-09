import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  loggedIn:boolean;
  refreshed:boolean;
  sidebarShow:boolean;
  instanceid:String="null";

  nbclick:boolean=true;

  navbarshow:boolean=true;

  constructor(private router:Router, private authService:AuthService, private data:DataService ) { 
    //this.loggedIn=false;
    this.sidebarShow=false;

  }


  navbarclicked(){
    this.nbclick = !this.nbclick;
    this.data.changenavbar(this.nbclick);
  }

  ngOnInit() {
    if( localStorage.getItem('id_loggedIn') != null && localStorage.getItem('id_loggedIn')=='true'){
      this.loggedIn=true;

      this.data.currentnavbar.subscribe(data=>{
          this.navbarshow = data;
      })

      // this.authService.getProfile().subscribe(
      //   data=>{
      //     this.instanceid = data._id;
      //   },
      //   err=>{
      //     console.log('token expired!');
      //     this.onLogout();
      //     return false;
      //   }
      // );

    }else{
      this.loggedIn=false;
      this.onLogout();
    }
  }

  onLogout(){
    this.authService.onLogout();
    //localStorage.clear();
    this.router.navigate(['/home/login']);
  }

  onNewMessage(){
    this.sidebarShow = !this.sidebarShow;
  }

  onProfile(){
    this.router.navigate(['/profile']);
  }

}
