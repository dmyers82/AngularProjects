import { Component, Inject } from "@angular/core";
import { NgForm} from "@angular/forms";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app",
    //template: "<div>This is the name list component</div>"
    templateUrl: "./searchcustomer.html"
})

export class SearchCustomerComponent{

    constructor(activeRoute:ActivatedRoute, private router: Router){
        console.log("SearchCustomerComponent constructor called.");
        console.log("FormComponent constructor called. Router - " + router.url);
        console.log("Active Route: " + activeRoute.snapshot.url[1].path);
    }

    nameList(){

        alert("NameList Called.");
        this.router.navigateByUrl("form/namelist");

    }

}