import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule }   from '@angular/forms';
import  { DateServiceService } from './date-service.service';
import { GreetingsService } from './greetings.service';
import {HttpClientModule} from '@angular/common/http';
import { Apicall2Component } from './apicall2/apicall2.component';
import { FilterPipe } from './filter.pipe';
import { FlexComponent } from './flex/flex.component';


@NgModule({
  declarations: [
    AppComponent,    
    routingComponent, Apicall2Component, FilterPipe, FlexComponent
    // The Declaration Array contain the all component list present in This module.
  ],

  //  In imports Array we add all the module that is included in your project.
  //  Every webproject or Mobile Application has lots of inbuild and predefined module.
  // We can include this in your imports secction of this 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DateServiceService, GreetingsService],
  bootstrap: [AppComponent]

  // Bootstrap array only conten the Root Component
})
export class AppModule { }
