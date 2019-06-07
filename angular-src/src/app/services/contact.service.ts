import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {take} from 'rxjs/operators'

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
    .map(res => res.json()).pipe(take(1));
  }

  registergroup(group){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"contacts/group/register",group,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallgroups(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"contacts/group/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallcontacts(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"contacts/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  removecontact(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"contacts/"+id,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  removecontactfromgroup(contact){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"contacts/group/contact/"+contact,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  removegroup(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"contacts/group/"+id,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  updategroup(group){
    
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put(this.ip+"contacts/group",group,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getgroupwithdetails(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"contacts/group/details/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

}
