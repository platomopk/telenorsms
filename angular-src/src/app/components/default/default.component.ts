import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MessagingService } from '../../services/messaging.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  user: any;
  obj: any;

  d: any = new Date();
  dold = new Date();

  _1month = new Date();
  _2month = new Date();
  _3month = new Date();

  datefrom: String = "";

  // this.dold.getFullYear() +
  // "-" +
  // ("0" + (this.d.getMonth() + 1)).slice(-2) +
  // "-" +
  // ("0" + this.d.getDate()).slice(-2);

  dateto: String = "";

  featureusage: boolean = true;
  bandwidthusage: boolean = true;

  // this.d.getFullYear() +
  // "-" +
  // ("0" + (this.d.getMonth() + 1)).slice(-2) +
  // "-" +
  // ("0" + this.d.getDate()).slice(-2);


  public doughnutChartType: string = 'doughnut';
  // lineChart
  public lineChartData: Array<any> = [
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(168, 227, 215, 0.7)',
      borderColor: 'rgba(168, 227, 215,0.8)',
      pointBackgroundColor: 'rgba(168, 227, 215,0.8)',
      pointBorderColor: 'rgba(0, 0, 0,0.5)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(168, 227, 215,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(154, 188, 195, 0.7)',
      borderColor: 'rgba(154, 188, 195,0.8)',
      pointBackgroundColor: 'rgba(154, 188, 195,0.8)',
      pointBorderColor: 'rgba(0, 0, 0,0.5)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(154, 188, 195,0.8)'
    }
  ];
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';

  doughnutChartLabels: string[] = ['Quick', 'Bulk', 'Drip', 'WhatsApp'];
  doughnutChartData: number[] = [];
  public doughnutChartLegend: boolean = false;
  public doughnutChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: false
  };
  private donutColors = [
    {
      backgroundColor: [
        'rgba(231, 76, 60, 1)',
        'rgba(52, 152, 219, 1)',
        'rgba(155, 89, 182, 1)',
        'rgba(26, 187, 156, 1)'
      ]
    }
  ];
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  navbarshow: boolean = true;
  quick: any; digital: any; bulk: any; drip: any;

  constructor(private auth: AuthService, private msgService: MessagingService, private dataService: DataService, private router: Router) {
    this.lineChartData = []
    this.lineChartLabels = []
    this.outbox = 0;
    this.sent = 0;


    this.dold.setMonth(this.d.getMonth() - 1);

    this._1month.setMonth(this.d.getMonth() - 1);
    this._2month.setMonth(this.d.getMonth() - 2);
    this._3month.setMonth(this.d.getMonth() - 3);

    this.datefrom =
      this.dold.getFullYear() +
      "-" +
      ("0" + (this.dold.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + this.dold.getDate()).slice(-2);

    this.dateto =
      this.d.getFullYear() +
      "-" +
      ("0" + (this.d.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + this.d.getDate()).slice(-2);
  }

  ngOnInit() {

    let obj = localStorage.getItem('user');
    if(obj == null){
      this.auth.onLogout();
      this.router.navigate(['/home/login'] );
    }
    this.user = JSON.parse(obj)

    this.dataService.currentnavbar.subscribe(data => {
      this.navbarshow = data;
    })

    this.getuserinfo();
    this.getfeatureUsage();
    this.getnetworkusagetelenor();
    this.getnetworkusageufone();
    this.getnetworkusagejazz();
    this.getnetworkusagewarid();
    this.getnetworkusagezong();

    this.getallforlinechart();
  }

  getuserinfo() {

    if(localStorage.getItem("user")==null){
        this.router.navigate(['/home/login'] );
        return false;
    }


    let obj = {
      email: this.auth.getSavedEmail()
    }
    this.auth.getbalance(obj).subscribe(data => {
      if (data.success) {
        this.obj = data.data;
      } else {
        alert(data.error);
      }
    })
  }

  getfeatureUsage() {

    this.quick = 0;
    this.digital = 0;
    this.bulk = 0;
    this.drip = 0;

    var email = this.auth.getSavedEmail();

    this.doughnutChartData = [];

    this.msgService.getalltotalquickcount(email).subscribe(data => {
      this.quick = data.count;
      this.msgService.getalltotalbulkcount(email).subscribe(data => {
        this.bulk = data.count;
        this.msgService.getalltotaldripcount(email).subscribe(data => {
          this.drip = data.count;
          this.msgService.getalltotaldigitalcount(email).subscribe(data => {
            this.digital = data.count;
            this.doughnutChartData.push(this.quick, this.bulk, this.drip, this.digital);

            this.featureusage = false;
          });
        });
      });
    });
  }


  ufone = 0; telenor = 0; warid = 0; jazz = 0; zong = 0; outbox = 0; sent = 0;
  getnetworkusagetelenor() {
    this.telenor = 0;
    let queryobj = {
      email: this.auth.getSavedEmail(),
      datefrom: this.datefrom,
      dateto: this.dateto,
      telco: "telenor"
    };
    this.msgService.getallquicktelcocount(JSON.stringify(queryobj)).subscribe(data => {
      if (data.success) {
        this.telenor += data.data;
      } else {
        console.log("No quick telenor Messages");
      }
      this.msgService.getallbulktelcocount(JSON.stringify(queryobj)).subscribe(data => {
        if (data.success) {
          this.telenor += data.data;
        } else {
          console.log("No bulk telenor Messages");
        }
        this.msgService.getalldriptelcocount(JSON.stringify(queryobj)).subscribe(data => {
          if (data.success) {
            this.telenor += data.data;
          } else {
            console.log("No drip telenor Messages");
          }
        });
      });
    });
  }

  getnetworkusageufone() {
    this.ufone = 0;
    let queryobj = {
      email: this.auth.getSavedEmail(),
      datefrom: this.datefrom,
      dateto: this.dateto,
      telco: "ufone"
    };
    this.msgService.getallquicktelcocount(JSON.stringify(queryobj)).subscribe(data => {
      if (data.success) {
        this.ufone += data.data;
      } else {
        console.log("No quick ufone Messages");
      }
      this.msgService.getallbulktelcocount(JSON.stringify(queryobj)).subscribe(data => {
        if (data.success) {
          this.ufone += data.data;
        } else {
          console.log("No bulk ufone Messages");
        }
        this.msgService.getalldriptelcocount(JSON.stringify(queryobj)).subscribe(data => {
          if (data.success) {
            this.ufone += data.data;
          } else {
            console.log("No drip ufone Messages");
          }
        });
      });
    });
  }

  getnetworkusagewarid() {
    this.warid = 0;
    let queryobj = {
      email: this.auth.getSavedEmail(),
      datefrom: this.datefrom,
      dateto: this.dateto,
      telco: "warid"
    };
    this.msgService.getallquicktelcocount(JSON.stringify(queryobj)).subscribe(data => {
      if (data.success) {
        this.warid += data.data;
      } else {
        console.log("No quick warid Messages");
      }
      this.msgService.getallbulktelcocount(JSON.stringify(queryobj)).subscribe(data => {
        if (data.success) {
          this.warid += data.data;
        } else {
          console.log("No bulk warid Messages");
        }
        this.msgService.getalldriptelcocount(JSON.stringify(queryobj)).subscribe(data => {
          if (data.success) {
            this.warid += data.data;
          } else {
            console.log("No drip warid Messages");
          }
        });
      });
    });
  }

  getnetworkusagejazz() {
    this.jazz = 0;
    let queryobj = {
      email: this.auth.getSavedEmail(),
      datefrom: this.datefrom,
      dateto: this.dateto,
      telco: "jazz"
    };
    this.msgService.getallquicktelcocount(JSON.stringify(queryobj)).subscribe(data => {
      if (data.success) {
        this.jazz += data.data;
      } else {
        console.log("No quick jazz Messages");
      }
      this.msgService.getallbulktelcocount(JSON.stringify(queryobj)).subscribe(data => {
        if (data.success) {
          this.jazz += data.data;
        } else {
          console.log("No bulk jazz Messages");
        }
        this.msgService.getalldriptelcocount(JSON.stringify(queryobj)).subscribe(data => {
          if (data.success) {
            this.jazz += data.data;
          } else {
            console.log("No drip jazz Messages");
          }
        });
      });
    });
  }

  getnetworkusagezong() {
    this.zong = 0;
    let queryobj = {
      email: this.auth.getSavedEmail(),
      datefrom: this.datefrom,
      dateto: this.dateto,
      telco: "zong"
    };
    this.msgService.getallquicktelcocount(JSON.stringify(queryobj)).subscribe(data => {
      if (data.success) {
        this.zong += data.data;
      } else {
        console.log("No quick zong Messages");
      }
      this.msgService.getallbulktelcocount(JSON.stringify(queryobj)).subscribe(data => {
        if (data.success) {
          this.zong += data.data;
        } else {
          console.log("No bulk zong Messages");
        }
        this.msgService.getalldriptelcocount(JSON.stringify(queryobj)).subscribe(data => {
          if (data.success) {
            this.zong += data.data;
          } else {
            console.log("No drip zong Messages");
          }
        });
      });
    });
  }


  getallforlinechart() {

    // current month
    this.datefrom = this._1month.getFullYear() +  "-" +    ("0" + (this._1month.getMonth() + 1)).slice(-2) + "-" + ("0" + this._1month.getDate()).slice(-2);
    this.dateto = this.d.getFullYear() +  "-" +    ("0" + (this.d.getMonth() + 1)).slice(-2) + "-" + ("0" + this.d.getDate()).slice(-2);
    let queryobj = {
      email: this.auth.getSavedEmail(),
      datefrom: this.datefrom,
      dateto: this.dateto
    };
    this.msgService.getmonthoutboxcount(JSON.stringify(queryobj)).subscribe(odata => {


      this.datefrom =
        this._2month.getFullYear() +
        "-" +
        ("0" + (this._2month.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + this._2month.getDate()).slice(-2);

      this.dateto =
        this._1month.getFullYear() +
        "-" +
        ("0" + (this._1month.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + this._1month.getDate()).slice(-2);

      let queryobj = {
        email: this.auth.getSavedEmail(),
        datefrom: this.datefrom,
        dateto: this.dateto
      };
      this.msgService.getmonthoutboxcount(JSON.stringify(queryobj)).subscribe(odata1 => {

        // second month
        this.datefrom =
          this._3month.getFullYear() +
          "-" +
          ("0" + (this._3month.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + this._3month.getDate()).slice(-2);

        this.dateto =
          this._2month.getFullYear() +
          "-" +
          ("0" + (this._2month.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + this._2month.getDate()).slice(-2);

        let queryobj = {
          email: this.auth.getSavedEmail(),
          datefrom: this.datefrom,
          dateto: this.datefrom
        };
        this.msgService.getmonthoutboxcount(JSON.stringify(queryobj)).subscribe(odata2 => {

          // outboxend

          // current month
          this.datefrom =
            this._1month.getFullYear() +
            "-" +
            ("0" + (this._1month.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + this._1month.getDate()).slice(-2);
          this.dateto =
            this.d.getFullYear() +
            "-" +
            ("0" + (this.d.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + this.d.getDate()).slice(-2);
          let queryobj = {
            email: this.auth.getSavedEmail(),
            datefrom: this.datefrom,
            dateto: this.dateto
          };
          this.msgService.getmonthsentcount(JSON.stringify(queryobj)).subscribe(sdata => {

            // 1st month
            this.datefrom =
              this._2month.getFullYear() +
              "-" +
              ("0" + (this._2month.getMonth() + 1)).slice(-2) +
              "-" +
              ("0" + this._2month.getDate()).slice(-2);
            this.dateto =
              this._1month.getFullYear() +
              "-" +
              ("0" + (this._1month.getMonth() + 1)).slice(-2) +
              "-" +
              ("0" + this._1month.getDate()).slice(-2);
            let queryobj = {
              email: this.auth.getSavedEmail(),
              datefrom: this.datefrom,
              dateto: this.dateto
            };
            this.msgService.getmonthsentcount(JSON.stringify(queryobj)).subscribe(sdata1 => {

              // second month
              this.datefrom =
                this._3month.getFullYear() +
                "-" +
                ("0" + (this._3month.getMonth() + 1)).slice(-2) +
                "-" +
                ("0" + this._3month.getDate()).slice(-2);
              this.dateto =
                this._2month.getFullYear() +
                "-" +
                ("0" + (this._2month.getMonth() + 1)).slice(-2) +
                "-" +
                ("0" + this._2month.getDate()).slice(-2);
              let queryobj = {
                email: this.auth.getSavedEmail(),
                datefrom: this.datefrom,
                dateto: this.dateto
              };
              this.msgService.getmonthsentcount(JSON.stringify(queryobj)).subscribe(sdata2 => {

                // sent end
                this.outbox = odata2.quick + odata2.bulk + odata2.drip + odata1.quick + odata1.bulk + odata1.drip + odata.quick + odata.bulk + odata.drip;
                this.sent = sdata2.quick + sdata2.bulk + sdata2.drip + sdata1.quick + sdata1.bulk + sdata1.drip + sdata.quick + sdata.bulk + sdata.drip;
                this.lineChartLabels.push(this.monthNames[this._2month.getMonth()]);
                this.lineChartLabels.push(this.monthNames[this._1month.getMonth()]);
                this.lineChartLabels.push(this.monthNames[this.d.getMonth()]);

                if (this.outbox < this.sent) {
                  this.lineChartData.push({ data: [odata2.quick + odata2.bulk + odata2.drip, odata1.quick + odata1.bulk + odata1.drip, odata.quick + odata.bulk + odata.drip], label: 'Outbox' });
                  this.lineChartData.push({ data: [sdata2.quick + sdata2.bulk + sdata2.drip, sdata1.quick + sdata1.bulk + sdata1.drip, sdata.quick + sdata.bulk + sdata.drip], label: 'Sent' });
                } else {
                  this.lineChartData.push({ data: [sdata2.quick + sdata2.bulk + sdata2.drip, sdata1.quick + sdata1.bulk + sdata1.drip, sdata.quick + sdata.bulk + sdata.drip], label: 'Sent' });
                  this.lineChartData.push({ data: [odata2.quick + odata2.bulk + odata2.drip, odata1.quick + odata1.bulk + odata1.drip, odata.quick + odata.bulk + odata.drip], label: 'Outbox' });
                }

                this.bandwidthusage = false;

              })
            })
          })

















        })
      })
    })


  }

  getallcountsent() {
    let queryobj = {
      email: this.auth.getSavedEmail(),
      datefrom: this.dateto,
      dateto: this.dateto
    };
    this.msgService.getmonthsentcount(JSON.stringify(queryobj)).subscribe(data => {

      // 1st month
      this.datefrom =
        this._1month.getFullYear() +
        "-" +
        ("0" + (this._1month.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + this._1month.getDate()).slice(-2);
      let queryobj = {
        email: this.auth.getSavedEmail(),
        datefrom: this.datefrom,
        dateto: this.datefrom
      };
      this.msgService.getmonthsentcount(JSON.stringify(queryobj)).subscribe(data1 => {

        // second month
        this.datefrom =
          this._2month.getFullYear() +
          "-" +
          ("0" + (this._2month.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + this._2month.getDate()).slice(-2);
        let queryobj = {
          email: this.auth.getSavedEmail(),
          datefrom: this.datefrom,
          dateto: this.datefrom
        };
        this.msgService.getmonthsentcount(JSON.stringify(queryobj)).subscribe(data2 => {
          this.lineChartData.push({ data: [data2.quick + data2.bulk + data2.drip, data1.quick + data1.bulk + data1.drip, data.quick + data.bulk + data.drip], label: 'Sent' });
          this.sent = data2.quick + data2.bulk + data2.drip + data1.quick + data1.bulk + data1.drip + data.quick + data.bulk + data.drip;

          console.log("sent", this.sent);
        })
      })
    })

  }




}
