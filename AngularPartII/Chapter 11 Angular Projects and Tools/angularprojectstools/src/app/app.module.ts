import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';  // This is for app.component.ts
import { ProductComponent } from "./component";

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
