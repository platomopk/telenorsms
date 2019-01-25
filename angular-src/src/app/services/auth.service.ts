import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService {

  authToken:any;
  user:any;

  constructor(private http:Http) {

  }

  getallactivatedusers(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("users/",{headers})
    .map(res => res.json());
  }

  getusersdump(dump){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("users/dump/"+dump,{headers})
    .map(res => res.json());
  }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post("users/register",user,{headers})
    .map(res => res.json());
  }

  getbalance(obj){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post("users/balance",obj,{headers})
    .map(res => res.json());
  }

  loginUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("users/authenticate",user,{headers})
    .map(res => res.json());
  }

  getBalance(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("users/balance/"+email,{headers})
    .map(res => res.json());
  }

  resetpassword(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put("users/resetpassword",email,{headers})
    .map(res => res.json());
  }

  getpending(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("users/pending/",{headers})
    .map(res => res.json());
  }

  activateaccount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put("users/activate",email,{headers})
    .map(res => res.json());
  }

  manipulateAccount(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put("users/manipulate",user,{headers})
    .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get("users/profile",{headers})
    .map(res => res.json());
  }

  // remove new for only immediate parent and other for everything
  getChildAccess(val){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("users/childs/new/"+val,{headers})
    .map(res => res.json());
  }

  getRights(email){
    let headers = new Headers();
    console.log(""+ email);
    headers.append('Content-Type','application/json');
    return this.http.get("users/rights/"+email,{headers})
    .map(res => res.json());
  }

  updateRights(rights){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put("users/rights",rights,{headers})
    .map(res => res.json());
  }

  updateProfile(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put("users/profile",user,{headers})
    .map(res => res.json());
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
    return tokenNotExpired();
  }


  getallchilds(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("users/rights/"+email,{headers})
    .map(res => res.json());
  }

  
  getallaccounts(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("users/all/"+email,{headers})
    .map(res => res.json());
  }
  
  

  // getRights(){
  //   let headers = new Headers();
  //   this.loadToken();
  //   headers.append('Authorization',this.authToken);
  //   headers.append('Content-Type','application/json');
  //   return this.http.get("users/rights",{headers})
  //   .map(res => res.json());
  // }
  removechild(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete("users/"+id,{headers})
    .map(res => res.json());
  }

  getSavedEmail(){
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
