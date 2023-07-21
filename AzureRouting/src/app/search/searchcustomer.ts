import { Injectable } from "@angular/core";
import { Component, Inject } from "@angular/core";
import { NgForm} from "@angular/forms";
import { Observable } from "rxjs";
import { MODES, SharedState, SHARED_STATE } from "../core/sharedState.model";
import { ActivatedRoute, Router } from "@angular/router";
import { Customer } from "../customer.model";
import { SelectedCustomer } from "../model/selectedcustomer";
import { CustomerAzure2 } from "../customerazure.model2";
import { Model, RestDataSource } from "../model/repository.model";
import { ModelAzure} from "../model/repositoryazure.model";

@Component({
    selector: "app",
    //template: "<div>This is the name list component</div>"
    templateUrl: "./searchcustomer.html"
})

export class SearchCustomerComponent{

    constructor(activeRoute:ActivatedRoute, private router: Router,
        private model: Model, private modelazure: ModelAzure, 
        @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>){
        console.log("SearchCustomerComponent constructor called.");
        console.log("FormComponent constructor called. Router - " + router.url);
        console.log("Active Route: " + activeRoute.snapshot.url[1].path);
    }

    optPersonal:boolean = true;
    newCustomer: Customer = new Customer();
    foundCustomer: Customer;
    fullname: string;
    selectedCustomer: SelectedCustomer;
    customerAzure2: CustomerAzure2;

    getCustomer(key: SelectedCustomer): Customer {
        this.foundCustomer = this.model.getCustomer(key);
        this.fullname = this.foundCustomer.firstname + " " + this.foundCustomer.lastname;
        console.log("getCustomer called - " + this.fullname);
        return this.foundCustomer;
    } 

    getAzureCustomer(key: SelectedCustomer):CustomerAzure2{
        console.log("getAzureCustomer called - " + key);
        this.customerAzure2 = this.modelazure.getAzureCustomer(key.id);
        //console.log("Customer Azure - " + this.jsonCustomerAzure);
        //this.jsonCustomerAzure;
        //console.log("AzureCustomer Occupation - " + this.customerAzure2.Occupation);
        return this.customerAzure2;
    }

    getFolderType(personal:boolean){
        this.optPersonal = personal;
        console.log("getFolderType called - " + personal.valueOf());
    }

    nameList(){

        alert("NameList Called.");
        this.router.navigateByUrl("form/namelist");

    }

}