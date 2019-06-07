import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {
  // ip:String="http://localhost:3000/";
  ip:String="";

  constructor(private http:Http) {
   }

  registercontact(contact){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"contacts/register",contact,{headers})
    .map(res => res.json());
  }

  registergroup(group){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"contacts/group/register",group,{headers})
    .map(res => res.json());
  }

  getallgroups(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"contacts/group/"+email,{headers})
    .map(res => res.json());
  }

  getallcontacts(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"contacts/"+email,{headers})
    .map(res => res.json());
  }

  removecontact(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"contacts/"+id,{headers})
    .map(res => res.json());
  }

  removecontactfromgroup(contact){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"contacts/group/contact/"+contact,{headers})
    .map(res => res.json());
  }

  removegroup(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"contacts/group/"+id,{headers})
    .map(res => res.json());
  }

  updategroup(group){
    
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put(this.ip+"contacts/group",group,{headers})
    .map(res => res.json());
  }

  getgroupwithdetails(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"contacts/group/details/"+email,{headers})
    .map(res => res.json());
  }

}
