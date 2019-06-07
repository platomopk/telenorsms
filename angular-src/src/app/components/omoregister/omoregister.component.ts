import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-omoregister',
  templateUrl: './omoregister.component.html',
  styleUrls: ['./omoregister.component.css']
})
export class OmoregisterComponent implements OnInit {

  sent:boolean = false;
  fullname:String;
  phone:String;
  email:String;
  password:String;
  type:String="omo";
  salesemail:String="";
  enckey:String="";
  rights:String[];

  constructor(
    private validateService:ValidateService,
    private authService:AuthService,
    private router:Router
  ) {  }

  ngOnInit() {
  }

  onRegister(){
    this.sent = true;
    // rights:['dashboard','messaging','notification','hybrid','reporting','contacts','tracker','pricing','settings'],
    if(this.type == '' || this.salesemail=='')
    {
      alert("Please fill in all fields")
      this.sent = false;
      return false;
    }

    if(this.type == "omo"){
      if(this.enckey == ""){
        this.sent = false;
        alert("Encryption key is required for this account type.")
        return false;
      }
    }

    
    
    let user = {
      fullname: this.fullname,
      phone: this.phone,
      email: this.email,
      password: this.password,
      rights:['contacts','tracker','pricing'],
      isparent:true,
      isdelegate:false,
      parent:null,
      parents:[],
      type:this.type,
      enckey:this.enckey,
      salesemail:this.salesemail
    }

    if(!this.validateService.validateRegister(user)){
      console.log("Please fill in all fields.");
      this.sent= false;
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      console.log("Please use a valid email.");
      this.sent=false;
      return false;
    }
    
    
    this.authService.registerUser(user)
    .subscribe((data:any)=>{
      this.sent = false;
      console.log(data);
      if(data.success){
        //this.flashMessagesService.show('You are now registered. You can now login.', { cssClass: 'alert-success', timeout: 2000 });
        alert("You are now registered. You can now login.");
        console.log("You are now registered. You can now login.");
        this.router.navigate(['/omo/login']);
      }else{
        //this.flashMessagesService.show('Something went wrong.', { cssClass: 'alert-danger', timeout: 2000 });
        alert("Something went wrong." + data.error);
        console.log("Something went wrong");
        this.router.navigate(['/omo/register']);
      }
    });
    
  }

  generateKey(){
    var pass = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    var passLength = 32;
    
    for (var i = 0; i < passLength; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));
  
    this.enckey = pass;
  }

}
