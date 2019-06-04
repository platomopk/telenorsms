import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from  '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { AddressbookComponent } from './components/addressbook/addressbook.component';
import { IssuestrackerComponent } from './components/issuestracker/issuestracker.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ComposemessageComponent } from './components/composemessage/composemessage.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';
import { SentComponent } from './components/sent/sent.component';
import { MessagingdashboardComponent } from './components/messagingdashboard/messagingdashboard.component';
import { CampaignmanagementComponent } from './components/campaignmanagement/campaignmanagement.component';
import { TemplatemanagementComponent } from './components/templatemanagement/templatemanagement.component';
import { AutorespondComponent } from './components/autorespond/autorespond.component';
import { QuickmessageComponent } from './components/quickmessage/quickmessage.component';
import { BulkmessageComponent } from './components/bulkmessage/bulkmessage.component';
import { DripmessageComponent } from './components/dripmessage/dripmessage.component';
import { StatictemplatemessagingComponent } from './components/statictemplatemessaging/statictemplatemessaging.component';
import { DynamictemplatemessagingComponent } from './components/dynamictemplatemessaging/dynamictemplatemessaging.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GroupsComponent } from './components/groups/groups.component';
import { NewcontactComponent } from './components/newcontact/newcontact.component';
import { IssuedashboardComponent } from './components/issuedashboard/issuedashboard.component';
import { CreateissueComponent } from './components/createissue/createissue.component';
import { ApitestingComponent } from './components/apitesting/apitesting.component';
import { BundledetailsComponent } from './components/bundledetails/bundledetails.component';
import { BuybundlesComponent } from './components/buybundles/buybundles.component';
import { UacmanagementComponent } from './components/uacmanagement/uacmanagement.component';
import { MaskmanagementComponent } from './components/maskmanagement/maskmanagement.component';
import { ComposenotificationComponent } from './components/composenotification/composenotification.component';
import { InboxnotificationComponent } from './components/inboxnotification/inboxnotification.component';
import { DashboardnotificationComponent } from './components/dashboardnotification/dashboardnotification.component';
import { TemplatenotificationComponent } from './components/templatenotification/templatenotification.component';
import { HybridComponent } from './components/hybrid/hybrid.component';
import { HybridcomposeComponent } from './components/hybridcompose/hybridcompose.component';
import { HybridinboxComponent } from './components/hybridinbox/hybridinbox.component';
import { HybridoutboxComponent } from './components/hybridoutbox/hybridoutbox.component';
import { HybridsentComponent } from './components/hybridsent/hybridsent.component';
import { HybriddashboardComponent } from './components/hybriddashboard/hybriddashboard.component';
import { HybridtemplateComponent } from './components/hybridtemplate/hybridtemplate.component';
import { TopbarstaticComponent } from './components/topbarstatic/topbarstatic.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { InboxsenderComponent } from './components/inboxsender/inboxsender.component';
import { InboxdetailsComponent } from './components/inboxdetails/inboxdetails.component';
import { ChartsModule } from 'ng2-charts';
import { HybridinboxsenderComponent } from './components/hybridinboxsender/hybridinboxsender.component';
import { HybridinboxdetailsComponent } from './components/hybridinboxdetails/hybridinboxdetails.component';

// services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { MaskService } from './services/mask.service';
import { PricingService } from './services/pricing.service';
import { IssueService } from './services/issue.service';
import { ContactService } from './services/contact.service';
import { MessagingService } from './services/messaging.service';
import { NotificationService } from './services/notification.service';
import { HybridService } from './services/hybrid.service';
import { DataService } from './services/data.service';
import { SalesService } from './services/sales.service';

// pipe
import { MasksfilterPipe } from './pipes/masksfilter.pipe';
import { NotificationreportedComponent } from './components/notificationreported/notificationreported.component';

import { FileSelectDirective } from 'ng2-file-upload';

import { DigitalComponent } from './components/digital/digital.component';
import { PrioutboxComponent } from './components/prioutbox/prioutbox.component';
import { LeareportingComponent } from './components/leareporting/leareporting.component';
import { DefaultComponent } from './components/default/default.component';
import { MasterComponent } from './components/master/master.component';
import { MasternewaccountComponent } from './components/masternewaccount/masternewaccount.component';
import { MasteraccountmoderationComponent } from './components/masteraccountmoderation/masteraccountmoderation.component';
import { MastermanageaccountComponent } from './components/mastermanageaccount/mastermanageaccount.component';
import { MasterbundlemoderationComponent } from './components/masterbundlemoderation/masterbundlemoderation.component';
import { MastercreditmoderationComponent } from './components/mastercreditmoderation/mastercreditmoderation.component';
import { MastermaskmoderationComponent } from './components/mastermaskmoderation/mastermaskmoderation.component';
import { MasterissuemoderationComponent } from './components/masterissuemoderation/masterissuemoderation.component';
import { MasterreportsComponent } from './components/masterreports/masterreports.component';
import { SalesrevenueComponent } from './components/salesrevenue/salesrevenue.component';
import { MastersalesrevenueComponent } from './components/mastersalesrevenue/mastersalesrevenue.component';
import { MasterdashboardComponent } from './components/masterdashboard/masterdashboard.component';
import { OmoComponent } from './components/omo/omo.component';
import { OmologinComponent } from './components/omologin/omologin.component';
import { OmoregisterComponent } from './components/omoregister/omoregister.component';

const appRoutes:Routes = [
  {
    path:'master',
    component:MasterComponent,
    children:[
      {
        path:'newaccount',
        component:MasternewaccountComponent
      },
      {
        path:'moderate',
        component:MasteraccountmoderationComponent
      },
      {
        path:'accounts',
        component:MastermanageaccountComponent
      },
      {
        path:'bundle',
        component:MasterbundlemoderationComponent
      },
      {
        path:'credit',
        component:MastercreditmoderationComponent
      },
      {
        path:'masks',
        component:MastermaskmoderationComponent
      },
      {
        path:'issues',
        component:MasterissuemoderationComponent
      },
      {
        path:'reports',
        component:MasterreportsComponent
      },
      {
        path:'salesrevenue',
        component:MastersalesrevenueComponent
      },
      {
        path:'dashboard',
        component:MasterdashboardComponent
      }
      // {
      //   path:'',
      //   redirectTo:'/master/newaccount',
      //   pathMatch:'full'
      // }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'',
        redirectTo:'/home/login',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'omo',
    component:OmoComponent,
    children:[
      {
        path:'register',
        component:OmoregisterComponent
      },
      {
        path:'login',
        component:OmologinComponent
      },
      {
        path:'',
        redirectTo:'/omo/login',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'default',
    component:DefaultComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'salesreport',
    component:SalesrevenueComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'hybrid',
    component:HybridComponent,
    loadChildren:'',
    children:[
      {
        path:'compose',
        component: HybridcomposeComponent
      },
      {
        path:'inbox',
        component: HybridinboxComponent
      },
      {
        path:'outbox',
        component: HybridoutboxComponent
      },
      {
        path:'sent',
        component: HybridsentComponent
      },
      {
        path:'dashboard',
        component: HybriddashboardComponent
      },
      {
        path:'templates',
        component: HybridtemplateComponent
      }
      // {
      //   path:'',
      //   redirectTo:'/hybrid/compose',
      //   pathMatch:'full'
      // }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'messaging',
    component:MessagingComponent,
    children:[
      {
        path:'compose',
        component: ComposemessageComponent,
        children:[
          // {
          //   path:'',
          //   redirectTo:'/messaging/compose/quick',
          //   pathMatch:'full'
          // },
          {
            path:'quick',
            component:QuickmessageComponent
          },
          {
            path:'bulk',
            component:BulkmessageComponent
          },
          {
            path:'drip',
            component:DripmessageComponent
          },
          {
            path:'digital',
            component:DigitalComponent
          }

        ]
      },

      {
        path:'inbox',
        component: InboxComponent
      },
      {
        path:'outbox',
        component: OutboxComponent
      },
      {
        path:'prioutbox',
        component: PrioutboxComponent
      },
      {
        path:'sent',
        component: SentComponent
      },
      {
        path:'messagingdashboard',
        component: MessagingdashboardComponent
      },
      {
        path:'campaignmanagement',
        component: CampaignmanagementComponent
      },
      {
        path:'templatemanagement',
        component: TemplatemanagementComponent,
        children:[
          {
            path:'sttmsg',
            component: StatictemplatemessagingComponent
          },
          {
            path:'dytmsg',
            component: DynamictemplatemessagingComponent
          },
          {
            path:'',
            redirectTo:'/messaging/templatemanagement/sttmsg',
            pathMatch:'full'
          }

        ]
      },
      {
        path:'autorespond',
        component: AutorespondComponent
      },
      // {
      //   path:'',
      //   redirectTo:'/messaging/messagingdashboard',
      //   pathMatch:'full'
      // }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'notification',
    component:NotificationComponent,
    children:[
      {
        path:'composen',
        component: ComposenotificationComponent
      },
      {
        path:'inbox',
        component: InboxnotificationComponent
      },
      {
        path:'dashboard',
        component: DashboardnotificationComponent
      },
      {
        path:'templates',
        component: TemplatenotificationComponent
      },
      {
        path:'reported',
        component: NotificationreportedComponent
      }
      // {
      //   path:'',
      //   redirectTo:'/notification/composen',
      //   pathMatch:'full'
      // }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'reporting',
    component:ReportingComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'leareporting',
    component:LeareportingComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'addressbook',
    component:AddressbookComponent,
    children:[
      {
        path:'contacts',
        component:ContactsComponent
      },
      {
        path:'groups',
        component:GroupsComponent
      },
      {
        path:'newcontact',
        component:NewcontactComponent
      }
      // {
      //   path:'',
      //   redirectTo:'/addressbook/contacts',
      //   pathMatch:'full'
      // }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'issuestracker',
    component:IssuestrackerComponent,
    children:[
      {
        path:'dashboard',
        component:IssuedashboardComponent
      },
      {
        path:'create',
        component:CreateissueComponent
      },
      {
        path:'apitest',
        component:ApitestingComponent
      }
      // {
      //   path:'',
      //   redirectTo:'/issuestracker/dashboard',
      //   pathMatch:'full'
      // },
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'pricing',
    component:PricingComponent,
    children:[
      // {
      //   path:'details',
      //   component:BundledetailsComponent
      // },
      {
        path:'buy',
        component:BuybundlesComponent
      }
      // {
      //   path:'',
      //   redirectTo:'/pricing/buy',
      //   pathMatch:'full'
      // }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'settings',
    component:SettingsComponent,
    children:[
      {
        path:'uac',
        component:UacmanagementComponent
      },
      {
        path:'masks',
        component:MaskmanagementComponent
      }
      // {
      //   path:'',
      //   redirectTo:'/settings/uac',
      //   pathMatch:'full'
      // }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    TopbarComponent,
    MessagingComponent,
    NotificationComponent,
    ReportingComponent,
    AddressbookComponent,
    IssuestrackerComponent,
    PricingComponent,
    SettingsComponent,
    ComposemessageComponent,
    InboxComponent,
    OutboxComponent,
    SentComponent,
    MessagingdashboardComponent,
    CampaignmanagementComponent,
    TemplatemanagementComponent,
    AutorespondComponent,
    QuickmessageComponent,
    BulkmessageComponent,
    DripmessageComponent,
    StatictemplatemessagingComponent,
    DynamictemplatemessagingComponent,
    ContactsComponent,
    GroupsComponent,
    NewcontactComponent,
    IssuedashboardComponent,
    CreateissueComponent,
    ApitestingComponent,
    BundledetailsComponent,
    BuybundlesComponent,
    UacmanagementComponent,
    MaskmanagementComponent,
    ComposenotificationComponent,
    InboxnotificationComponent,
    DashboardnotificationComponent,
    TemplatenotificationComponent,
    HybridComponent,
    HybridcomposeComponent,
    HybridinboxComponent,
    HybridoutboxComponent,
    HybridsentComponent,
    HybriddashboardComponent,
    HybridtemplateComponent,
    TopbarstaticComponent,
    FooterComponent,
    InboxsenderComponent,
    InboxdetailsComponent,
    HybridinboxsenderComponent,
    HybridinboxdetailsComponent,
    MasksfilterPipe,
    NotificationreportedComponent,
    DigitalComponent,
    PrioutboxComponent,
    LeareportingComponent,
    DefaultComponent,
    MasterComponent,
    MasternewaccountComponent,
    MasteraccountmoderationComponent,
    MastermanageaccountComponent,
    MasterbundlemoderationComponent,
    MastercreditmoderationComponent,
    MastermaskmoderationComponent,
    MasterissuemoderationComponent,
    MasterreportsComponent,
    SalesrevenueComponent,
    MastersalesrevenueComponent,
    MasterdashboardComponent,
    OmoComponent,
    OmologinComponent,
    OmoregisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularDateTimePickerModule,
    ChartsModule
  ],
  providers: [SalesService,AuthGuard,DataService,ValidateService, AuthService, MaskService,PricingService,IssueService,ContactService,MessagingService,NotificationService,HybridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
