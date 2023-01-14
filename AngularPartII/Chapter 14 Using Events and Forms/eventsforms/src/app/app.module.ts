import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// import { AppComponent } from './app.component';
import { ProductComponent } from "./component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ProductComponent],
  bootstrap: [ProductComponent],
  providers: []
})
export class AppModule { }
