import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {take} from 'rxjs/operators'

@Injectable()
export class IssueService {

  // ip:String="http://localhost:3000/";
  ip:String="";
  

  constructor(private http:Http) { }

  registerissue(issue){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"issue/register",issue,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  resolveissue(issue){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put(this.ip+"issue/resolve",issue,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getpendingissues(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"issue/",{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallissues(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"issue/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  removeissue(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"issue/"+id,{headers})
    .map(res => res.json()).pipe(take(1));
  }


}
