import { Component, Inject } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: "app",
    //template: "<div>This is the main menu component</div>"
    templateUrl: "./mainmenucomponent.html"
})

export class MainMenuComponent {


    customerSearch(){
        alert("Customer Search Called.");
    }

    purchaseFeatures(){
        alert("CPurchase Features Called.");
    }
}