import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CustomerComponent } from './customercomponent'

@NgModule({
  declarations: [
    AppComponent, CustomerComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
  // bootstrap: [AppComponent]
})
export class AppModule { }
