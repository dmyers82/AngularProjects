import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MainMenuComponent } from "../mainmenu.component";
import { SearchCustomerComponent } from "../search/searchcustomer";
import { NameListComponent } from "../search/namelist.component";
import { PersonalDemographComponent } from "../customerinfo/personaldemographics/personaldemograph.component";
import { CustomerFolderComponent } from "../customerinfo/customerfolder.component";
import { MODES, SHARED_STATE, SharedState } from "./sharedState.model";
import { Subject } from "rxjs";
import { Model } from "../model/repository.model";
import { MessageModule } from "../messages/message.module";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule],
    declarations: [CustomerFolderComponent, MainMenuComponent, NameListComponent, PersonalDemographComponent, SearchCustomerComponent],
    exports: [CustomerFolderComponent, MainMenuComponent, NameListComponent, PersonalDemographComponent, SearchCustomerComponent],
    providers: [{
        provide: SHARED_STATE,
        deps: [MessageService, Model],
        useFactory: (messageService, model) => {
            let subject = new Subject<SharedState>();
            subject.subscribe(m => messageService.reportMessage(
                new Message(MODES[m.mode] + (m.id != undefined
                ? ` ${model.getProduct(m.id).name}` : "")))
            );
            return subject;
        }
    }]
    
})
export class CoreModule { }