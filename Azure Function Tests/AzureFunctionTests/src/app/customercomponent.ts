import { Component, Inject } from "@angular/core"
import { Customer } from "./customer.model";
import { CustomerModel } from "./customerrepository.model";
import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: "app",
    templateUrl: "customersearch.html"
})

export class CustomerComponent {
   
    model: CustomerModel = new CustomerModel();

    newCustomer: Customer = new Customer();

    foundCustomer: Customer;

    customerList: Array<Customer>;

    fullname: string;

    get jsonProduct() {
        return JSON.stringify(this.newCustomer);
    }

    addCustomer(c: Customer) {
        console.log("New Customer: " + this.jsonProduct);
        (this.model.saveCustomer(c));
    }

    getCustomer(key: number): Customer {
        this.foundCustomer = this.model.getCustomer(key);
        this.fullname = this.foundCustomer.firstname + " " + this.foundCustomer.lastname;
        console.log("getCustomer called - " + this.fullname);
        return this.foundCustomer;
    }

    getCustomers(): Customer[] {
        return this.model.getCustomers();
    }

    getCustomerCount(): number {
        return this.getCustomers().length;
    }

    selectedCustomer: number;

    getSelected(customer: Customer): boolean {
        return customer.id == this.selectedCustomer;
    }

    formSubmitted: boolean = false;

    submitForm() {
        console.log("Submit Form Called");
        this.addCustomer(this.newCustomer);
    }
}