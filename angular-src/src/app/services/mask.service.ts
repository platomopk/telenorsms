import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

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
    .map(res => res.json());
  }

  getallmask(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"masks/"+email,{headers})
    .map(res => res.json());
  }

  getpendingmasks(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"masks/pending",{headers})
    .map(res => res.json());
  }

  activatemask(mask){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put(this.ip+"masks/allow",mask,{headers})
    .map(res => res.json());
  }

  getmaskbyid(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"masks/id/"+id,{headers})
    .map(res => res.json());
  }

  getactivatedmasks(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"masks/activated/"+email,{headers})
    .map(res => res.json());
  }

  removemask(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"masks/"+id,{headers})
    .map(res => res.json());
  }


}
