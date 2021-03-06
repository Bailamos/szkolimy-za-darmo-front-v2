import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {CoreModule} from './core/core.module';
import {UserModule} from './user/user.module';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth/auth.module";
import {InstructorManagmentModule} from "./instructor-managment/instructor-managment.module";
import {AdminModule} from "./admin/admin.module";
import {CrmModule} from "./crm/crm.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    AuthModule,
    InstructorManagmentModule,
    AdminModule,
    CrmModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
