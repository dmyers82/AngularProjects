import { Injectable } from "@angular/core";
import { Customer } from "../customer.model";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class Model {
    private customers: Customer[] = new Array<Customer>();
    private locator = (c: Customer, id: number) => c.id == id;
    private deletedCustomers: Customer;

    constructor(private dataSource: RestDataSource) {
        this.dataSource.getData().subscribe(data => this.customers = data);
        console.log("Model constructor called");
    }

    getCustomers(): Customer[] {
        return this.customers;
    }

    getCustomer(id: number): Customer {
        console.log("getCustomer called Customer Name - " + this.customers[id].lastname);
        return this.customers[id];
        //return this.products.find(p => this.locator(p, id));
    }

    saveCustomer(customer: Customer) {

        if (customer.id == 0 || customer.id == null) {
            this.dataSource.saveCustomer(customer)
            .subscribe(c => this.customers.push(c));
            } else {
            this.dataSource.updateCustomer(customer).subscribe(c => {
            let index = this.customers
                .findIndex(item => this.locator(item, c.id));
            this.customers.splice(index, 1, c);
            });
        }
        console.log("saveProduct called Customer ID - " + customer.id);
    }

    deleteCustomer(id: number) {
        this.dataSource.deleteCustomer(id).subscribe(() => {
            let index = this.customers.findIndex(c => this.locator(c, id));
            if (index > -1) {
                this.customers.splice(index, 1, this.deletedCustomers);
                console.log("deleteCustomer called index - " + index);
                //console.log("Deleted Customers - " + this.deletedCustomers.firstname + " " + this.deletedCustomers.lastname);
            }
        });
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getCustomer(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}