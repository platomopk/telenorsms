import { Component, OnInit } from "@angular/core";
import {Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";
import { SalesService } from "../../services/sales.service";
import { CsvService } from "angular2-json2csv";
import { resolve } from "../../../../node_modules/@types/q";
import { AES, enc } from "crypto-js";
import { DataService } from '../../services/data.service';

@Component({
  selector: "app-mastersalesrevenue",
  templateUrl: "./mastersalesrevenue.component.html",
  styleUrls: ["./mastersalesrevenue.component.css"],
  providers: [CsvService]
})
export class MastersalesrevenueComponent implements OnInit {
  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: true,
    format: "dd-MM-yyyy HH:mm:ss",
    defaultOpen: false,
    closeOnSelect: true
  };

  navbarshow:boolean = true;
  selfemail: String = "";
  notfound: boolean = false;
  spinner: boolean = false;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ["Total Sent","Total Revenue"];
  public barChartType: string = "bar";
  public barChartLegend: boolean = true;

  public barChartData: any[] = [];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  d: any = new Date();

  constructor(
    private auth: AuthService,
    private salesService: SalesService,
    private _csvService: CsvService,
    private dataService:DataService, private router:Router
  ) {}

  operation: String;
  operationname: String;

  downloadable: any[] = [];

  datefrom: String =
    this.d.getFullYear() +
    "-" +
    ("0" + (this.d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + this.d.getDate()).slice(-2);
  dateto: String =
    this.d.getFullYear() +
    "-" +
    ("0" + (this.d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + this.d.getDate()).slice(-2);

  localemail: String = "";



  salesmenArr=[];



  getallsalesmen(){
    this.auth.getallsalesmen().subscribe(data => {
      if (data.data.length > 0) {
        //console.log(data.data);

        this.salesmenArr = data.data;
        //console.log(this.ops);
        //console.log(this.childsArr);
      } else {
        console.log("No Salesmen");
      }
    });
  }




  ngOnInit() {

    if(localStorage.getItem("user")==null)
      {
        this.router.navigate(['/home/login']);
      }

    this.localemail = this.auth.getSavedEmail();

    this.dataService.currentnavbar.subscribe(data=>{
      this.navbarshow = data;
    })


    this.getallsalesmen();

    this.getallchilds();
  }

  opchange(ev) {
    this.operation = ev.target.value;
    console.log(this.operation);

    if (this.operation == "quick") {
      //this.getallquick();
    } else if (this.operation == "bulk") {
      //this.getallbulk();
    } else if (this.operation == "drip") {
      //this.getalldrip();
    }
  }

  opnamechangequick(ev) {
    this.operationname = ev.target.value;
  }

  opnamechangeother(ev) {
    this.operationname = ev.target.value;
  }

  _MS_PER_DAY: any = 1000 * 60 * 60 * 24;
  // a and b are javascript Date objects
  dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / this._MS_PER_DAY);
  }

  ops: any[] = [];

  report() {

    this.notfound = false;

    this.barChartData = [];
    this.downloadable = [];
    this.ops = [];

    if (this.variableemail == "empty" || this.variableemail == "") {
      alert("Please Select an Account");
      return false;
    }

    var query = {
      datefrom:this.datefrom,
      dateto:this.dateto,
      email:this.variableemail
    }

    this.spinner = true;
    this.salesService.getsalesreport(JSON.stringify(query)).subscribe(data=>{
      if(data.success){
        console.log(data);
        if(data.data.length>0){
          this.downloadable = data.data;
          data.data.forEach(element => {
            this.barChartData.push({ data: [element.total,element.revenue], label: element.fullname });  
          });
         
        }else{
          this.downloadable = [];
          this.notfound=true;
        }
        this.notfound = false;
      }else{
        alert(data.error);
        this.notfound = true;
      }
      this.spinner = false;
    })

  }

  download() {
    this._csvService.download(this.downloadable, "sales-revenue-report-"+this.datefrom+"-"+this.dateto);
  }

  childsArr: any[] = [];
  getallchilds() {
    this.auth.getChildAccess(this.auth.getSavedEmail()).subscribe(data => {
      if (data.data.length > 0) {
        //console.log(data.data);

        this.childsArr = data.data;
        //console.log(this.ops);
        //console.log(this.childsArr);
      } else {
        console.log("No Childs");
      }
    });
  }

  variableemail: String = "";
  childchange(ev) {
    console.log(ev.target.value);
    this.variableemail = ev.target.value;
  }

  salesmenchange(ev) {
    console.log(ev.target.value);
    this.variableemail = ev.target.value;
  }

}
