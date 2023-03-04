import { Injectable } from "@angular/core";
import { Customer } from "../customercomponent";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class Model {
    private customers: Customer[] = new Array<Customer>();
    private locator = (c: Customer, id: number) => c.id == id;

    constructor(private dataSource: RestDataSource) {
        this.dataSource.getData().subscribe(data => this.customers = data);
        console.log("Model constructor called");
    }

    getCustomers(): Customer[] {
        return this.customers;
    }

    getCustomer(id: number): Customer {
        console.log("Model constructor called Product Name - " + this.customers[id].lastname);
        return this.customers[id];
        //return this.products.find(p => this.locator(p, id));
    }

    saveCustomer(customer: Customer) {
        if (customer.id == 0 || customer.id == null) {
            customer.id = this.generateID();
            this.customers.push(customer)
         } else {
            let index = this.customers
                .findIndex(c => this.locator(c, customer.id));
            this.customers.splice(index, 1, customer);
        }
        console.log("saveProduct called Customer ID - " + customer.id);
    }

    deleteProduct(id: number) {
        this.dataSource.deleteCustomer(id).subscribe(() => {
            let index = this.customers.findIndex(p => this.locator(p, id));
            if (index > -1) {
                this.customers.splice(index, 1);
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