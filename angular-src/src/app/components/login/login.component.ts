import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;

  sent:boolean = false;

  constructor(
    private router:Router,
    private authService:AuthService
  ) {
    if( localStorage.getItem('id_loggedIn') != null && localStorage.getItem('id_loggedIn')=='true'){
      // 
      var objectu = JSON.parse(localStorage.getItem("user"));
      if(objectu.type === 'sa'){
        this.router.navigate(['/master/newaccount']);  
      }else if(objectu.type === 'sales'){
        this.router.navigate(['/salesreport']);  
      }else{
        this.router.navigate(['/default']);
      }
    }
  }

  ngOnInit() {
  }

  onLogin(){

    this.sent = true;

    let user = {
      email:this.email,
      password:this.password
    }

    this.authService.loginUser(user).subscribe(
      data => {
        this.sent = false;
        if(data.success){

          if(data.activated && data.suspended == false){

            if(data.user.type === "omo"){
              alert("You are not authorized to use this portal.")
              return false;
            }

            alert("You are logged in.");
            this.authService.storeUserData(data.token, data.user);

            var objectu = JSON.parse(localStorage.getItem("user"));
            if(objectu.type === 'sa'){
              this.router.navigate(['/master/newaccount']);  
            }else if(objectu.type === 'sales'){
              this.router.navigate(['/salesreport']);  
            }else{
              this.router.navigate(['/default']);
            }
          }else{
            alert("Your account is blocked." +
            " Please contact us at support@mangotree.com for further assistance.");
            this.router.navigate(['/home/login']);
          }

        }else{
          alert(data.msg);
          this.router.navigate(['/home/login']);
        }
        //console.log(data);
      }
    );

    //localStorage.clear();
    //localStorage.setItem("id_loggedIn","true");

    //console.log(localStorage.getItem("id_loggedIn"));

    //this.router.navigate(['/dashboard']);
  }

}
