import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaAttrDirective } from "./attr. directive";
import { PaModel } from "./twoway.directive";

// import { AppComponent } from './app.component';
import { ProductComponent } from "./component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ProductComponent, PaAttrDirective, PaModel],
  bootstrap: [ProductComponent],
  providers: []
})
export class AppModule { }
