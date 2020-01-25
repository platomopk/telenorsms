import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {take} from 'rxjs/operators'
import { Router } from  '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService {

  authToken:any;
  user:any;


  ip:String="http://localhost:3000/";
  // ip:String="";

  constructor(private http:Http,private router:Router,) {

  }


  getallsalesmen(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(this.ip+"users/salesmen",{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallactivatedusers(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(this.ip+"users/",{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getusersdump(dump){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(this.ip+"users/dump/"+dump,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"users/register",user,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getbalance(obj){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"users/balance",obj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  loginUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.ip+"users/authenticate",user,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getBalance(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(this.ip+"users/balance/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  resetpassword(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put(this.ip+"users/resetpassword",email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getpending(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(this.ip+"users/pending/",{headers})
    .map(res => res.json()).pipe(take(1));
  }

  activateaccount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put(this.ip+"users/activate",email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  deleteaccount(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"users/delete/"+id,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  manipulateAccount(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put(this.ip+"users/manipulate",user,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(this.ip+"users/profile",{headers})
    .map(res => res.json()).pipe(take(1));
  }

  // remove new for only immediate parent and other for everything
  getChildAccess(val){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(this.ip+"users/childs/new/"+val,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getRights(email){
    let headers = new Headers();
    console.log(""+ email);
    headers.append('Content-Type','application/json');
    return this.http.get(this.ip+"users/rights/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  updateRights(rights){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put(this.ip+"users/rights",rights,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  updateProfile(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put(this.ip+"users/profile",user,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem("id_loggedIn","true");

    this.authToken = token;
    this.user = user;
  }

  onLogout(){
    this.authToken = null;
    this.user = null;

    localStorage.clear();
  }

  loggedIn(){
    if(localStorage.getItem("id_token")!=null){
      return tokenNotExpired('id_token');
    }
    
  }


  getallchilds(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(this.ip+"users/rights/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  
  getallaccounts(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(this.ip+"users/all/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }
  
  

  // getRights(){
  //   let headers = new Headers();
  //   this.loadToken();
  //   headers.append('Authorization',this.authToken);
  //   headers.append('Content-Type','application/json');
  //   return this.http.get("users/rights",{headers})
  //   .map(res => res.json()).pipe(take(1));
  // }
  removechild(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"users/"+id,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getSavedEmail(){
    // if(localStorage.getItem("user")==null){
    //   this.router.navigate(['/home/login'],{replaceUrl:true});
    //   return false;
    // }

    if(localStorage.getItem('user')!=null){
      let userstr = localStorage.getItem('user');
      let userobj = JSON.parse(userstr);
      var email = '';
      if(userobj.delegate){
        email = userobj.parent;
      }else{
        email = userobj.email;
      }
      return email;
    }

  }
}
