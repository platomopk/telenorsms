import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  navbarshow:boolean = true;
  // user:Object;

  fullname:String="";
  phone:String="";
  email:String="";
  password:String;
  user:any;

  ufone:String="";telenor:String="";zong:String="";jazz:String="";warid:String="";

  constructor(private authService:AuthService, private router: Router, private dataService:DataService) { }

  ngOnInit() {
    // get the user id
    const ide = localStorage.getItem('user');
    this.user = JSON.parse(ide);
    this.dataService.currentnavbar.subscribe(data=>{
      this.navbarshow = data;
    })

    //get the user info
    this.authService.getProfile().subscribe(
      data => {
        // this.user = data.user;
        //console.log(data);
        

        this.fullname = data.fullname;
        this.phone = data.phone;
        this.email = data.email;
        this.ufone = data.ufone;
        this.telenor = data.telenor;
        this.zong = data.zong;
        this.jazz = data.jazz;
        this.warid = data.warid;

        //console.log(this.user);
      },
      err => {
        //alert('Token Expired!');
        console.log(err);
        this.authService.onLogout();
        this.router.navigate(['/home/login']);
        
        return false;
      }
    );
  }

  onProfileUpdate(){

    if((this.ufone.length > 0 && this.ufone.length < 12) || this.ufone.length > 12){
      alert('Invalid Ufone Testing Number')
      return false;
    }

    if((this.telenor.length > 0 && this.telenor.length < 12) || this.telenor.length > 12){
      alert('Invalid Telenor Testing Number')
      return false;
    }

    if((this.zong.length > 0 && this.zong.length < 12) || this.zong.length > 12){
      alert('Invalid Zong Testing Number')
      return false;
    }

    if((this.jazz.length > 0 && this.jazz.length < 12) || this.jazz.length > 12){
      alert('Invalid Jazz Testing Number')
      return false;
    }

    if((this.warid.length > 0 && this.warid.length < 12) || this.warid.length > 12){
      alert('Invalid Warid Testing Number')
      return false;
    }

    const user = {
      id: this.user.id,
      fullname : this.fullname,
      phone : this.phone,
      email : this.email,
      password: this.password,
      ufone: this.ufone.length>0?this.ufone:"",
      telenor:this.telenor.length>0?this.telenor:"",
      zong:this.zong.length>0?this.zong:"",
      jazz:this.jazz.length>0?this.jazz:"",
      warid:this.warid.length>0?this.warid:""
    }

    

    this.authService.updateProfile(user).subscribe(data =>{
      if(data.success){
        this.authService.storeUserData(data.token,data.user);
        alert(data.msg + " Please re-login.");
        this.authService.onLogout();
        this.router.navigate(['/home/login']);

      }else{
        alert(data.msg);
      }
    });



  }

  

}
