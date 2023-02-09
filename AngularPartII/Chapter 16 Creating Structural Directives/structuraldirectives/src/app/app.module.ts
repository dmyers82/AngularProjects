import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaAttrDirective } from "./attr. directive";
import { PaModel } from "./twoway.directive";
import { PaStructureDirective } from "./structure.directive";
//import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    ProductComponent, PaAttrDirective, PaModel, PaStructureDirective
    //AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
  //bootstrap: [AppComponent]
})
export class AppModule { }
