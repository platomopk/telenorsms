import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  sent:boolean = false;
  fullname:String;
  phone:String;
  email:String;
  password:String;
  type:String="";
  rights:String[];

  constructor(
    private validateService:ValidateService,
    private authService:AuthService,
    private router:Router
  ) {  }

  ngOnInit() {
  }

  onRegister(){
    // rights:['dashboard','messaging','notification','hybrid','reporting','contacts','tracker','pricing','settings'],
    if(this.type == '')
    {
      return false;
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
      type:this.type
    }

    if(!this.validateService.validateRegister(user)){
      console.log("Please fill in all fields.");
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      console.log("Please use a valid email.");
      return false;
    }

    this.sent = true;
    
    this.authService.registerUser(user)
    .subscribe(data=>{
      this.sent = false;
      if(data.success){
        //this.flashMessagesService.show('You are now registered. You can now login.', { cssClass: 'alert-success', timeout: 2000 });
        alert("You are now registered. You can now login.");
        console.log("You are now registered. You can now login.");
        this.router.navigate(['/home/login']);
      }else{
        //this.flashMessagesService.show('Something went wrong.', { cssClass: 'alert-danger', timeout: 2000 });
        alert("Something went wrong. Email might already be registered");
        console.log("Something went wrong");
        this.router.navigate(['/home/register']);
      }
    });
    
  }

}
