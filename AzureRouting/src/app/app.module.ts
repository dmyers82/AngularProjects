import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from "./app.routing"
import { CoreModule } from "./core/core.module";


@NgModule({
  imports: [BrowserModule, CoreModule, routing],
  declarations: [AppComponent],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
