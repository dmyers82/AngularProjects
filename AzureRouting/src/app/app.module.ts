import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModelAzure } from "./model/repositoryazure.model";
import { MainMenuComponent } from "./mainmenu.component";
import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing
  ],
  providers: [ModelAzure],
  bootstrap: [MainMenuComponent]
  //bootstrap: [AppComponent] default line of code when creating a new project
})
export class AppModule { }
