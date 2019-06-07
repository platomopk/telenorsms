import { Component, OnInit } from '@angular/core';
import {PricingService} from '../../services/pricing.service';
import {AuthService} from '../../services/auth.service'
import {Router } from '@angular/router';

@Component({
  selector: 'app-buybundles',
  templateUrl: './buybundles.component.html',
  styleUrls: ['./buybundles.component.css']
})
export class BuybundlesComponent implements OnInit {

  bundle:String;
  email:String;
  bundlearr:any[]=[];

  _expiry:String;_encryption:string="disable";_featureset:string="messaging";
  _smscredit:string="0";_whatsappcredit:string="0";
  _tpsms:String="0";_tpwa:String="0";
  cost:number=0;
  items:String="";

  itemscredit:string="";
  costcredit:number=0;

  constructor(private pricingService:PricingService, private auth:AuthService, private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem("user")==null)
      {
        this.router.navigate(['/home/login']);
      }
    let userob = localStorage.getItem('user');
    let u=JSON.parse(userob);
    this.email = u.email;

    this.getAllBundles();
    this.getAllCredit();
  }

  onChangeBundle(event){
    this.bundle=event.target.value;
  }

  selectchangecredit(event){
    this.costcredit = 0;
    this.itemscredit = "" ;


    if(this._smscredit == "631" ){
      this.costcredit+=631;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;999 SMS for 631 PKR \n";
    }else if(this._smscredit == "618" ){
      this.costcredit+=618;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;1000 SMS for 618 PKR \n";
    }else if(this._smscredit == "765" ){
      this.costcredit+=765;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;1250 SMS for 765 PKR \n";
    }else if(this._smscredit == "907" ){
      this.costcredit+=907;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;1500 SMS for 907 PKR \n";
    }else if(this._smscredit == "1035" ){
      this.costcredit+=1035;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;1750 SMS for 1035 PKR \n";
    }else if(this._smscredit == "1156" ){
      this.costcredit+=1156;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;2000 SMS for 1156 PKR \n";
    }else if(this._smscredit == "1714" ){
      this.costcredit+=1714;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;3000 SMS for 1714 PKR \n";
    }else if(this._smscredit == "2259" ){
      this.costcredit+=2259;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;4000 SMS for 2259 PKR \n";
    }else if(this._smscredit == "2756" ){
      this.costcredit+=2756;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;5000 SMS for 2756 PKR \n";
    }else if(this._smscredit == "4033" ){
      this.costcredit+=4033;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;7500 SMS for 4033 PKR \n";
    }else if(this._smscredit == "5310" ){
      this.costcredit+=5310;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;10000 SMS for 5310 PKR \n";
    }else if(this._smscredit == "6554" ){
      this.costcredit+=6554;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;12500 SMS for 6554 PKR \n";
    }else if(this._smscredit == "7663" ){
      this.costcredit+=7663;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;15000 SMS for 7663 PKR \n";
    }else if(this._smscredit == "12435" ){
      this.costcredit+=12435;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;25000 SMS for 12435 PKR \n";
    }else if(this._smscredit == "14721" ){
      this.costcredit+=14721;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;30000 SMS for 14721 PKR \n";
    }else if(this._smscredit == "16939" ){
      this.costcredit+=16939;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;35000 SMS for 16939 PKR \n";
    }else if(this._smscredit == "21174" ){
      this.costcredit+=21174;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;45000 SMS for 21174 PKR \n";
    }else if(this._smscredit == "25140" ){
      this.costcredit+=25140;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;55000 SMS for 25140 PKR \n";
    }else if(this._smscredit == "29274" ){
      this.costcredit+=29274;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;65000 SMS for 29274 PKR \n";
    }else if(this._smscredit == "33273" ){
      this.costcredit+=33273;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;75000 SMS for 33273 PKR \n";
    }else if(this._smscredit == "34416" ){
      this.costcredit+=34416;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;80000 SMS for 34416 PKR \n";
    }else if(this._smscredit == "35424" ){
      this.costcredit+=35424;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;85000 SMS for 35424 PKR \n";
    }else if(this._smscredit == "36903" ){
      this.costcredit+=36903;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;90000 SMS for 36903 PKR \n";
    }else if(this._smscredit == "38315" ){
      this.costcredit+=38315;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;95000 SMS for 38315 PKR \n";
    }else if(this._smscredit == "38987" ){
      this.costcredit+=38987;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;100000 SMS for 38987 PKR \n";
    }else if(this._smscredit == "41407" ){
      this.costcredit+=41407;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;110000 SMS for 41407 PKR \n";
    }else if(this._smscredit == "46213" ){
      this.costcredit+=46213;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;125000 SMS for 46213 PKR \n";
    }else if(this._smscredit == "54447" ){
      this.costcredit+=54447;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;150000 SMS for 54447 PKR \n";
    }else if(this._smscredit == "61169" ){
      this.costcredit+=61169;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;175000 SMS for 61169 PKR \n";
    }else if(this._smscredit == "67219" ){
      this.costcredit+=67219;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;200000 SMS for 67219 PKR \n";
    }else if(this._smscredit == "74109" ){
      this.costcredit+=74109;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;225000 SMS for 74109 PKR \n";
    }else if(this._smscredit == "80663" ){
      this.costcredit+=80663;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;250000 SMS for 80663 PKR \n";
    }else if(this._smscredit == "85032" ){
      this.costcredit+=85032;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;275000 SMS for 85032 PKR \n";
    }
    

    if(this._whatsappcredit == "1000" ){
      this.costcredit+=100;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;WhatsApp Credit = 100 PKR \n";
    }else if(this._whatsappcredit == "10000"){
      this.costcredit+=1000;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;WhatsApp Credit = 1000 PKR \n";
    }else if(this._whatsappcredit == "100000"){
      this.costcredit+=2000;
      this.itemscredit+="<span><i class='fa fa-check'></i></span>&nbsp;WhatsApp Credit = 2000 PKR \n";
    }

  }

  selectchange(event){
    this.cost = 0;
    this.items = "" ;

    // expiry
    if(this._expiry == "1"){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;Expiry for 1 Month = 0 PKR \n";
    }else if(this._expiry == "2"){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;Expiry for 2 Months = 0 PKR \n";
    }else if(this._expiry == "3"){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;Expiry for 3 Months = 0 PKR \n";
    }
    
    // enc
    if(this._encryption == "enable" ){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;Encryption = 0 PKR \n";
    }else if(this._encryption=="disable"){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;Encryption = 0 PKR \n";
    }

    // feaut
    if(this._featureset == "messaging" ){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;SMS = 0 PKR \n";
    }else if(this._featureset=="digital"){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;WhatsApp = 0 PKR \n";
    }else if(this._featureset=="messaging,digital"){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;SMS & WhatsApp = 0 PKR \n";
    }



    if(this._tpsms == "10" ){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;Throughput for SMS = 0 PKR \n";
    }else if(this._tpsms == "50"){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;Throughput for SMS = 0 PKR \n";
    }else if(this._tpsms == "100"){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;Throughput for SMS = 0 PKR \n";
    }else if(this._tpsms == "0"){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;Throughput for SMS = 0 PKR \n";
    }

    if(this._tpwa == "10" ){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;Throughput for WhatsApp = 0 PKR \n";
    }else if(this._tpwa == "50"){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;Throughput for WhatsApp = 0 PKR \n";
    }else if(this._tpwa == "100"){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;Throughput for WhatsApp = 0 PKR \n";
    }else if(this._tpwa == "0"){
      this.cost+=0;
      this.items+="<span><i class='fa fa-check'></i></span>&nbsp;Throughput for WhatsApp = 0 PKR \n";
    }
  }

  buycredit(){

    if(this._smscredit === "0" || this.costcredit == 0){
      alert("Please select the # of sms first.");
      return false;
    }

    let credit = {
      smscredit:this._smscredit,
      whatsappcredit:this._whatsappcredit,
      from:'sa@mangotree.com',
      to:this.auth.getSavedEmail(),
      cost:this.costcredit,
      payment:false,
      createdby:this.auth.getSavedEmail()
    }

    this.pricingService.registercredit(credit).subscribe(data=>{
      if(data.success){
        alert('Credit requested!');
        location.reload();
      }else{
        alert(data.err);
      }
    })
  }

  createbundle(){

    if(this._featureset == "messaging,digital"){
        if(this._tpsms != "0" && this._tpwa != "0"){
        }else{
          alert("Please select base througput for both WhatsApp and SMS");
          return false;
        }
    }

    if (this._featureset == "messaging") {
      if (this._tpsms != "0") {
      } else {
        alert("Please select base througput for SMS");
        return false;
      }
    }

    if (this._featureset == "digital") {
      if (this._tpwa != "0") {
      } else {
        alert("Please select base througput for WhatsApp");
        return false;
      }
    }

    let newBundle = {
      expiry:this._expiry,
      encryption:this._encryption,
      featureset:this._featureset,
      smstp:this._tpsms,
      watp:this._tpwa,
      cost:this.cost,
      createdby:this.auth.getSavedEmail()
    };

    this.pricingService.registerbundle(newBundle).subscribe(data=>{
      if(data.success){
        alert("Successfully Subscribed");
        location.reload();

      }else{
        alert("Already subscribed to a bundle. Please buy credit now.");
      }
    });


  }

  onSubmit(){
    let newBundle = {
      name:this.bundle,
      createdby:this.auth.getSavedEmail()
    }

    this.pricingService.registerbundle(newBundle).subscribe(data=>{
      if(data.success){
        alert("Successfully Subscribed");
        this.getAllBundles();
      }else{
        alert("Not Subscribed");
      }
    });
  }

  getAllBundles(){
    this.pricingService.getallbundles(this.auth.getSavedEmail()).subscribe(data=>{
      this.bundlearr = data.data;
    }); 
  }

  creditarr:any=[];
  getAllCredit(){
    this.pricingService.getallcredits(this.auth.getSavedEmail()).subscribe(data=>{
      this.creditarr=data.data;
    })
  }

  ondelete(id){
    this.pricingService.removebundle(id).subscribe(data=>{
      if(data.success){
        alert("Successfully Deleted");
        this.getAllBundles();
      }else{
        alert("Not Deleted");
      }
    }); 
  }

}
