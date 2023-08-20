import { Injectable } from "@angular/core";
import { Component, Inject } from "@angular/core";
//import { NgForm} from "@angular/forms";
//import {FormsModule} from "@angular/forms";
import { Observable } from "rxjs";
//import { MODES, SharedState, SHARED_STATE } from "../core/sharedState.model";
import { ActivatedRoute, Router } from "@angular/router";
import { Customer } from "../customer.model";
import { CustomerAzure2 } from "../customerazure.model2";
//import { Model, RestDataSource } from "../model/repository.model";
import { ModelAzure } from "../model/repositoryazure.model";
import { CustomerAcctsAzure } from "../model/customeracctsazure.model";
import { CustomerAzure } from "../customerazure.model";

@Component({
    selector: "app",
    templateUrl: "./searchcustomer.html"
})

export class SearchCustomerComponent{

    constructor(activeRoute:ActivatedRoute, private router: Router,
        private modelazure: ModelAzure, 
        ){
        console.log("SearchCustomerComponent constructor called.");
        console.log("FormComponent constructor called. Router - " + router.url);
        console.log("Active Route: " + activeRoute.snapshot.url[1].path);
    }

    optPersonal:boolean = true;
    newCustomer: CustomerAzure = new CustomerAzure();
    foundCustomer!: CustomerAzure;
    fullname!: string;
    customerAzure2!: CustomerAzure2;

    getAzureCustomer(key: number):CustomerAzure2{
        console.log("getAzureCustomer called - " + key);
        this.customerAzure2 = this.modelazure.getAzureCustomer(key);
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