import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masternewaccount',
  templateUrl: './masternewaccount.component.html',
  styleUrls: ['./masternewaccount.component.css']
})
export class MasternewaccountComponent implements OnInit {

  fullname:String;
  phone:String;
  email:String;
  password:String;
  type:String="";
  enckey:String="";
  rights:String[];

  constructor(
    private validateService:ValidateService,
    private authService:AuthService,
    private router:Router
  ) {  }

  generateKey(){
    var pass = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    var passLength = 32;
    
    for (var i = 0; i < passLength; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));
  
    this.enckey = pass;
  }

  ngOnInit() {
  }

  onRegister(){
    // rights:['dashboard','messaging','notification','hybrid','reporting','contacts','tracker','pricing','settings'],
    if(this.type == '')
    {
      return false;
    }

    if(this.type == "omo"){
      if(this.enckey == ""){
        alert("Encryption key is required for this account type.")
        return false;
      }
    }

    let user = {};

    if(this.type == 'regular' || this.type == "omo"){
      user = {
        fullname: this.fullname,
        phone: this.phone,
        email: this.email,
        password: this.password,
        rights:['contacts','tracker','pricing','settings'],
        isparent:true,
        isdelegate:false,
        parent:null,
        parents:[],
        enckey:this.enckey,
        type:this.type,
        isactivated:true,
        sentby:"admin"
      }
    }else if(this.type == 'telco'){
      user = {
        fullname: this.fullname,
        phone: this.phone,
        email: this.email,
        password: this.password,
        rights:['contacts','tracker','pricing','settings'],
        isparent:true,
        isdelegate:false,
        parent:null,
        parents:[],
        type:this.type,
        isactivated:true,
        sentby:"admin"
      }
    }else if(this.type == 'lea'){
      user = {
        fullname: this.fullname,
        phone: this.phone,
        email: this.email,
        password: this.password,
        rights:['contacts','tracker','pricing','settings'],
        isparent:true,
        isdelegate:false,
        parent:null,
        parents:[],
        type:this.type,
        isactivated:true,
        sentby:"admin"
      }
    }else if(this.type == 'sales'){
      user = {
        fullname: this.fullname,
        phone: this.phone,
        email: this.email,
        password: this.password,
        rights:['settings'],
        isparent:true,
        isdelegate:false,
        parent:null,
        parents:[],
        type:this.type,
        isactivated:true,
        sentby:"admin"
      }
    }
    
    
    this.authService.registerUser(user)
    .subscribe((data:any)=>{
      if(data.success){
        alert("User registered successfully.");
      }else{
        alert("Something went wrong. Email might already be registered");
      }
    });
    
  }

}
