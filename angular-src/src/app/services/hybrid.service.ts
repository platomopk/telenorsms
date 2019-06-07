import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HybridService {

  constructor(private http:Http) {
  }

  // ip:String="http://localhost:3000/";
  ip:String="";

  // -----------------------------------------------------------------------

  registerhybrid(hybrid){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"hybrid/register",hybrid,{headers})
    .map(res => res.json());
  }

  getallhybrid(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"hybrid/"+email,{headers})
    .map(res => res.json());
  }

  removehybrid(name){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"hybrid/"+name,{headers})
    .map(res => res.json());
  }

}
