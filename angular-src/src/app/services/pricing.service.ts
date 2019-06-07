import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {take} from 'rxjs/operators'

@Injectable()
export class PricingService {

  // ip:String="http://localhost:3000/";
  ip:String="";
  

  constructor(private http:Http) { }

  // bundles/register

  registerbundle(bundle){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"bundles/register",bundle,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  extendexpirypromo(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put(this.ip+"bundles/extendexpirypromo",email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  extendsmstp10promo(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put(this.ip+"bundles/extendsmstp10promo",email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  extendwatp10promo(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put(this.ip+"bundles/extendwatp10promo",email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  registercredit(credit){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"bundles/credit/register",credit,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  credithistory(query){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"bundles/credit/history/"+query,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallbundles(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"bundles/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallcredits(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"bundles/credit/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getpendingconfigs(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"bundles/all/pending/",{headers})
    .map(res => res.json()).pipe(take(1));
  }

  receivebundlepayment(bundleid){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put(this.ip+"bundles/receive",bundleid,{headers})
    .map(res => res.json()).pipe(take(1));
  }




  getpendingcredits(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"bundles/credit/all/pending/",{headers})
    .map(res => res.json()).pipe(take(1));
  }

  receivecreditpayment(creditid){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.put(this.ip+"bundles/credit/receive",creditid,{headers})
    .map(res => res.json()).pipe(take(1));
  }


  


  removebundle(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"bundles/"+id,{headers})
    .map(res => res.json()).pipe(take(1));
  }



  getconfigurationdump(dump){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"bundles/dump/"+dump,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getcreditdump(dump){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"bundles/credit/dump/"+dump,{headers})
    .map(res => res.json()).pipe(take(1));
  }


}
