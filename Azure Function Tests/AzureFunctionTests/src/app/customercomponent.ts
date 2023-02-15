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

    customerList: Array<Customer>;

    get jsonProduct() {
        return JSON.stringify(this.newCustomer);
    }
    addCustomer(p: Customer) {
        console.log("New Customer: " + this.jsonProduct);
        (this.model.saveCustomer(p));
    }

    getCustomer(key: number): Customer {
        return this.model.getCustomer(key);
    }

    getCustomers(): Customer[] {
        return this.model.getCustomers();
    }

    getCustomerCount(): number {
        return this.getCustomers().length;
    }

    formSubmitted: boolean = false;

    submitForm() {
        console.log("Submit Form Called");
        this.addCustomer(this.newCustomer);
    }
}