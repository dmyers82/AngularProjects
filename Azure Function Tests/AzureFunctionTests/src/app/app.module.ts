import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ModelModule } from "./model/model.module";
import { ModelDetailModule } from "./model/modeldetail.module";
import { CoreModule } from "./core/core.module";

import { AppComponent } from './app.component';
import { CustomerComponent } from './customercomponent';
import { PaAttrDirective } from "./attr.directive";
import { MessageModule } from "./messages/message.module";
import { MessageComponent } from "./messages/message.component";


@NgModule({
  declarations: [
    AppComponent, CustomerComponent, PaAttrDirective
  ],
  imports: [
    BrowserModule, FormsModule, ModelModule, CoreModule, MessageModule, ModelDetailModule,
  ],
  providers: [],
  bootstrap: [CustomerComponent, MessageComponent ]
  // bootstrap: [AppComponent]
})
export class AppModule { }
