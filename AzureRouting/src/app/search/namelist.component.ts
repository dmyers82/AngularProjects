import { Component, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    selector: "app",
    templateUrl: "./namelist.component.html"
})

export class NameListComponent{

    constructor(activeRoute:ActivatedRoute, private router: Router){
        console.log("NameListComponent constructor called.");
        console.log("Active Route: " + activeRoute.snapshot.url[1].path);
    }

    OpenFolder(){
        alert("OpenFolder Called.");
        this.router.navigateByUrl("form/customerfolder");
    }
}
