import { Component, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app",
    templateUrl: "./mainmenucomponent.html"
})

export class MainMenuComponent {

    constructor(activeRoute:ActivatedRoute, private router: Router){
        console.log("MainMenuComponent constructor called.");
        //console.log("Active Route: " + activeRoute.snapshot.url[1].path);
    }

    customerSearch(){
        alert("Customer Search Called.");
        this.router.navigateByUrl("form/searchcustomer");
    }

    purchaseFeatures(){
        alert("CPurchase Features Called.");
    }
}