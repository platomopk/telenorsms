import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SalesService {

  ip:String="http://localhost:3000/";

  constructor(private http:Http) { }


  getsalesreport(query){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"sales/getreport/"+query,{headers})
    .map(res => res.json());
  }

}
