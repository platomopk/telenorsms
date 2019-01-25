import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MaskService {

  constructor(private http:Http) { }

  registermask(mask){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post("masks/register",mask,{headers})
    .map(res => res.json());
  }

  getallmask(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get("masks/"+email,{headers})
    .map(res => res.json());
  }

  getpendingmasks(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get("masks/pending",{headers})
    .map(res => res.json());
  }

  activatemask(mask){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put("masks/allow",mask,{headers})
    .map(res => res.json());
  }

  getmaskbyid(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get("masks/id/"+id,{headers})
    .map(res => res.json());
  }

  getactivatedmasks(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get("masks/activated/"+email,{headers})
    .map(res => res.json());
  }

  removemask(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete("masks/"+id,{headers})
    .map(res => res.json());
  }


}
