import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IssueService {

  constructor(private http:Http) { }

  registerissue(issue){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post("issue/register",issue,{headers})
    .map(res => res.json());
  }

  resolveissue(issue){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put("issue/resolve",issue,{headers})
    .map(res => res.json());
  }

  getpendingissues(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get("issue/",{headers})
    .map(res => res.json());
  }

  getallissues(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get("issue/"+email,{headers})
    .map(res => res.json());
  }

  removeissue(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete("issue/"+id,{headers})
    .map(res => res.json());
  }


}
