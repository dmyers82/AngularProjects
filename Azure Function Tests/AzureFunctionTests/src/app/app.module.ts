import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CustomerComponent } from './customercomponent';
import { PaAttrDirective } from "./attr.directive";

@NgModule({
  declarations: [
    AppComponent, CustomerComponent, PaAttrDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
  // bootstrap: [AppComponent]
})
export class AppModule { }
