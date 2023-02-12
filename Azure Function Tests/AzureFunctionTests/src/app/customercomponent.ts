import { Component } from "@angular/core"
import { Customer } from "./customer.model";
import { CustomerModel } from "./customerrepository.model";

@Component({
    selector: "app",
    templateUrl: "customersearch.html"
})

export class CustomerComponent {

   
    model: CustomerModel = new CustomerModel();

    newCustomer: Customer = new Customer();

    get jsonProduct() {
        return JSON.stringify(this.newCustomer);
    }
    addCustomer(p: Customer) {
        console.log("New Customer: " + this.jsonProduct);
    }
}