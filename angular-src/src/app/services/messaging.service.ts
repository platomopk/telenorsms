import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {take} from 'rxjs/operators'


@Injectable()
export class MessagingService {

  ip:String="http://localhost:3000/";
  // ip:String="";
  


  constructor(private http:Http) {
  }

  registertemplate(template){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"messaging/template/register",template,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalltemplates(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/template/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallstatictemplates(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/template/static/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalldynamictemplates(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/template/dynamic/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  removetemplate(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"messaging/template/"+id,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  //  -------------------------------------------------------------------
  registercampaign(campaign){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"messaging/campaigns/register",campaign,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallcampaigns(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/campaigns/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallstaticcampaigns(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/campaigns/static/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalldynamiccampaigns(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/campaigns/dynamic/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  removecampaign(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"messaging/campaigns/"+id,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  downloadcampaign(path){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/campaigns/download/"+path,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  // ----------------------------------------------------------------------
  registerdigital(digital){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"messaging/digital/register",digital,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  registerdigitalstatic(bulk){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"messaging/digital/static/register",bulk,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  registerdigitaldynamic(bulk){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"messaging/digital/dynamic/register",bulk,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalldigital(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/digital/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getdigitaldump(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/digital/dump/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  removedigital(name){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"messaging/digital/"+name,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  // ---------------------------------------

  

  // -----------------------------------------------------------------------

  registerquick(quick){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"messaging/quick/register",quick,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  // getallquick(email){
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   //since it is an obsservable so we have to map its response
  //   return this.http.get("messaging/quick/"+email,{headers})
  //   .map(res => res.json()).pipe(take(1));
  // }

  getallquick(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json;charset=UTF-8');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/quick/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallquicktelcocount(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json;charset=UTF-8');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/quick/counttelco/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getmonthoutboxcount(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json;charset=UTF-8');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/monthcountoutbox/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getmonthoutboxquickcount(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json;charset=UTF-8');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/monthcountoutboxquick/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }
  getmonthoutboxbulkcount(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json;charset=UTF-8');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/monthcountoutboxbulk/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }
  getmonthoutboxdripcount(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json;charset=UTF-8');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/monthcountoutboxdrip/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getmonthsentcount(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json;charset=UTF-8');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/monthcountsent/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getmonthsentquickcount(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json;charset=UTF-8');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/monthcountsentquick/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }
  getmonthsentbulkcount(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json;charset=UTF-8');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/monthcountsentbulk/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }
  getmonthsentdripcount(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json;charset=UTF-8');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/monthcountsentdrip/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getquickdump(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/quick/dump/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  removequick(name){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"messaging/quick/"+name,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  //  --------------------------------------------------------------------

  registerbulk(bulk){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"messaging/bulk/register",bulk,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  registerbulktest(bulk){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"messaging/bulk/registertest",bulk,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallbulk(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/bulk/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallbulktelcocount(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/bulk/counttelco/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getbulkdump(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/bulk/dump/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  removebulk(name){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"messaging/bulk/"+name,{headers})
    .map(res => res.json()).pipe(take(1));
  }
  
  // -----------------------------------------------------

  registerbulkdynamic(bulk){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"messaging/bulk/dynamic/register",bulk,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  registerbulkdynamictest(bulk){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"messaging/bulk/dynamic/registertest",bulk,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  // ---------------------------------------------

  registerdrip(drip){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"messaging/drip/register",drip,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalldrip(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/drip/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalldriptelcocount(queryobj){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/drip/counttelco/"+queryobj,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getdripdump(query){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/drip/dump/"+query,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  removedrip(name){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.delete(this.ip+"messaging/drip/"+name,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  // registergroup(group){
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   //since it is an obsservable so we have to map its response
  //   return this.http.post("contacts/group/register",group,{headers})
  //   .map(res => res.json()).pipe(take(1));
  // }

  // getallgroups(email){
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   //since it is an obsservable so we have to map its response
  //   return this.http.get("contacts/group/"+email,{headers})
  //   .map(res => res.json()).pipe(take(1));
  // }

  // getallcontacts(email){
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   //since it is an obsservable so we have to map its response
  //   return this.http.get("contacts/"+email,{headers})
  //   .map(res => res.json()).pipe(take(1));
  // }

  // removecontact(id){
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   //since it is an obsservable so we have to map its response
  //   return this.http.delete("contacts/"+id,{headers})
  //   .map(res => res.json()).pipe(take(1));
  // }

  // removecontactfromgroup(contact){
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   //since it is an obsservable so we have to map its response
  //   return this.http.delete("contacts/group/contact/"+contact,{headers})
  //   .map(res => res.json()).pipe(take(1));
  // }

  // removegroup(id){
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   //since it is an obsservable so we have to map its response
  //   return this.http.delete("contacts/group/"+id,{headers})
  //   .map(res => res.json()).pipe(take(1));
  // }

  // updategroup(group){
    
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   return this.http.put("contacts/group",group,{headers})
  //   .map(res => res.json()).pipe(take(1));
  // }

  // getgroupwithdetails(email){
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   //since it is an obsservable so we have to map its response
  //   return this.http.get("contacts/group/details/"+email,{headers})
  //   .map(res => res.json()).pipe(take(1));
  // }

  getAccountSummary(creds){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.post(this.ip+"messaging/account/summary",creds,{headers})
    .map(res => res.json()).pipe(take(1));
  }












  getallquickdashboard(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/quick/dashboard/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallbulkdashboard(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/bulk/dashboard/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalldripdashboard(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/drip/dashboard/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalldigitaldashboard(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/digital/dashboard/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  // --------------- sent
  getallsentquicklimit(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/sent/quick/limit/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }


  // ------------ outbox
  getalloutboxquicklimit(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/quick/limit/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalloutboxbulklimit(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/bulk/limit/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalloutboxdigitallimit(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/digital/limit/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }


  // ------------------------------ prio quick limit
  getallprioutboxquicklimit(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/pri/quick/limit/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  // ----- outbox quick count
  getalloutboxquickcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/quick/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalloutboxquickjazzcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/quick/jazz/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalloutboxquickzongcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/quick/zong/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalloutboxquickwaridcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/quick/warid/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalloutboxquickufonecount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/quick/ufone/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalloutboxquicktelenorcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/quick/telenor/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  // ------------------------------- prio outbox
  getallprioutboxquickcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/pri/quick/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  // -----------------------------------


  getalloutboxbulkjazzcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/bulk/jazz/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalloutboxbulkzongcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/bulk/zong/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalloutboxbulkwaridcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/bulk/warid/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalloutboxbulkufonecount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/bulk/ufone/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalloutboxbulktelenorcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/bulk/telenor/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }


  // prioutbox telco segregate
  getallprioutboxquickjazzcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/pri/quick/jazz/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallprioutboxquickzongcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/pri/quick/zong/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallprioutboxquickwaridcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/pri/quick/warid/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallprioutboxquickufonecount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/pri/quick/ufone/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallprioutboxquicktelenorcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/pri/quick/telenor/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  
  getallprioutboxbulkjazzcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/pri/bulk/jazz/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallprioutboxbulkzongcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/pri/bulk/zong/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallprioutboxbulkwaridcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/pri/bulk/warid/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallprioutboxbulkufonecount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/pri/bulk/ufone/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getallprioutboxbulktelenorcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/pri/bulk/telenor/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }





  // -----------------

  getalloutboxbulkcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/bulk/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

  getalloutboxdigitalcount(email){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //since it is an obsservable so we have to map its response
    return this.http.get(this.ip+"messaging/outbox/digital/count/"+email,{headers})
    .map(res => res.json()).pipe(take(1));
  }

    // ----- 
    getalltotalquickcount(email){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      //since it is an obsservable so we have to map its response
      return this.http.get(this.ip+"messaging/total/quick/count/"+email,{headers})
      .map(res => res.json()).pipe(take(1));
    }
  
    getalltotalbulkcount(email){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      //since it is an obsservable so we have to map its response
      return this.http.get(this.ip+"messaging/total/bulk/count/"+email,{headers})
      .map(res => res.json()).pipe(take(1));
    }
  
    getalltotaldigitalcount(email){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      //since it is an obsservable so we have to map its response
      return this.http.get(this.ip+"messaging/total/digital/count/"+email,{headers})
      .map(res => res.json()).pipe(take(1));
    }

    getalltotaldripcount(email){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      //since it is an obsservable so we have to map its response
      return this.http.get(this.ip+"messaging/total/drip/count/"+email,{headers})
      .map(res => res.json()).pipe(take(1));
    }



    getzongapicreds(){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      //since it is an obsservable so we have to map its response
      return this.http.get(this.ip+"messaging/account/summary",{headers})
      .map(res => res.json()).pipe(take(1));
    }


}
