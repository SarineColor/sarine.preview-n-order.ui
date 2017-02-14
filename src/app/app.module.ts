import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PNOProcessService} from "./pnoprocess.service";
import {AuthorizationView} from "./authorization/AuthorizationView";
import {ManualInputView} from './manual-input/ManualInputView';
import {API} from "./API/API";
import {UserService} from "./services/UserService";
import {StonesService} from "./services/StonesService";
import {StonesView} from "./stones/StonesView";
import {DatePickerModule} from "ng2-datepicker/index";
import { BootstrapModalModule } from "ng2-bootstrap-modal";
import { DataTableModule } from 'angular2-datatable';
import {ValidateView} from "./validate/ValidateView";
import {CookieManager} from "./services/CookieManager";
import {ProgramService} from "./services/ProgramService";

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationView,
    ManualInputView,
    StonesView,
    ValidateView
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    DatePickerModule,
    BootstrapModalModule
  ],
  providers: [PNOProcessService, API, UserService, StonesService, ProgramService, CookieManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
