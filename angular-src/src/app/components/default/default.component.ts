import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MessagingService} from '../../services/messaging.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  user:any;
  obj:any;

  constructor(private auth:AuthService, private msgService:MessagingService) { }

  ngOnInit() {
    let obj = localStorage.getItem('user');
    this.user = JSON.parse(obj)

    this.getuserinfo();
  }

  getuserinfo(){
    let obj = {
      email:this.auth.getSavedEmail()
    }
    this.auth.getbalance(obj).subscribe(data=>{
      if(data.success){
        this.obj = data.data;
        console.log(this.obj);
        
      }else{
        alert(data.error);
      }
    })
  }




}
