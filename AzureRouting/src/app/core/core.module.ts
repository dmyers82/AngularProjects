import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MainMenuComponent } from "../mainmenu.component";
import { SearchCustomerComponent } from "../search/searchcustomer";
import { NameListComponent } from "../search/namelist.component";
import { PersonalDemographComponent } from "../customerinfo/personaldemographics/personaldemograph.component";
import { CustomerFolderComponent } from "../customerinfo/customerfolder.component";


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule],
    declarations: [CustomerFolderComponent, MainMenuComponent, NameListComponent, PersonalDemographComponent, SearchCustomerComponent],
    exports: [CustomerFolderComponent, MainMenuComponent, NameListComponent, PersonalDemographComponent, SearchCustomerComponent]
})
export class CoreModule { }