import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppifyModule } from '../essentials/appify.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
