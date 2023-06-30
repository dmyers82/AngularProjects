import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MainMenuComponent } from './mainmenu.component'
import { AppComponent } from './app.component';
import { routing } from "./app.routing"
import { SearchCustomerComponent } from './search/searchcustomer';
import { NameListComponent } from './search/namelist.component';
import { PersonalDemographComponent } from './customerinfo/personaldemographics/personaldemograph.component';

@NgModule({
  declarations: [
    AppComponent, CustomerFolderComponent, NameListComponent, 
    PersonalDemographComponent, SearchCustomerComponent],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [MainMenuComponent]
  // bootstrap: [AppComponent]
})
export class AppModule { }
