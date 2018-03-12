import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  MdToolbarModule } from "@angular/material";
import { CoreModule } from "./core/core.module";
import { MdSidenavModule } from "@angular/material";
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import { AppRoutingModule } from "./app-routing.module";
import { ProjectModule } from "./project/project.module";
import { MdDialog } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    MdSidenavModule,
    AppRoutingModule,
    ProjectModule
  ],
  providers: [MdDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
