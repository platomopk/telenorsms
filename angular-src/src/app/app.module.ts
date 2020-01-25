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
import { TopbarComponent } from './components/topbar/topbar.component';
import { TopbarstaticComponent } from './components/topbarstatic/topbarstatic.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { ChartsModule } from 'ng2-charts';


// services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { MessagingService } from './services/messaging.service';
import { DataService } from './services/data.service';

// pipe
import { MasksfilterPipe } from './pipes/masksfilter.pipe';

import { FileSelectDirective } from 'ng2-file-upload';
import { DefaultComponent } from './components/default/default.component';
import { TelenorcampaignsComponent } from './components/telenorcampaigns/telenorcampaigns.component';
import { TelenorcampaignnewComponent } from './components/telenorcampaignnew/telenorcampaignnew.component';
import { TelenordistributionlistComponent } from './components/telenordistributionlist/telenordistributionlist.component';
import { TelenorfirewallComponent } from './components/telenorfirewall/telenorfirewall.component';
import { TelenorautoresponseComponent } from './components/telenorautoresponse/telenorautoresponse.component';
import { TelenorhrComponent } from './components/telenorhr/telenorhr.component';
import { TelenoreditcampaignComponent } from './components/telenoreditcampaign/telenoreditcampaign.component';

const appRoutes:Routes = [
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
    path:'default',
    component:DefaultComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'campaigns',
    component:TelenorcampaignsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'newcampaign',
    component:TelenorcampaignnewComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'editcampaign',
    component:TelenoreditcampaignComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'newlist',
    component:TelenordistributionlistComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'firewall',
    component:TelenorfirewallComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'autoresponse',
    component:TelenorautoresponseComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'hr',
    component:TelenorhrComponent,
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
    TopbarComponent,
    TopbarstaticComponent,
    FooterComponent,
    MasksfilterPipe,
    DefaultComponent,
    TelenorcampaignsComponent,
    TelenorcampaignnewComponent,
    TelenordistributionlistComponent,
    TelenorfirewallComponent,
    TelenorautoresponseComponent,
    TelenorhrComponent,
    TelenoreditcampaignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularDateTimePickerModule,
    ChartsModule
  ],
  providers: [AuthGuard,DataService,ValidateService, AuthService,MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
