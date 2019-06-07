import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {take} from 'rxjs/operators'

@Injectable()
export class MaskService {
  // ip:String="http://localhost:3000/";
  ip:String="";
  
  constructor(private http:Http) { }

  registermask(mask){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"masks/register",mask,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallmask(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"masks/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getpendingmasks(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"masks/pending",{headers})
    .map(res => res.json()).pipe(take(1));
  }

  activatemask(mask){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put(this.ip+"masks/allow",mask,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getmaskbyid(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"masks/id/"+id,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getactivatedmasks(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"masks/activated/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  removemask(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"masks/"+id,{headers})
    .map(res => res.json()).pipe(take(1));
  }


}
