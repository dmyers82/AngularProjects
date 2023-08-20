import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextBoxComponent} from './textbox.component';

@NgModule({
  declarations: [
    AppComponent, TextBoxComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [TextBoxComponent]
  //bootstrap: [AppComponent, TextBoxComponent]
})
export class AppModule { }
