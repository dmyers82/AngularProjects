import { Injectable } from "@angular/core";
import { Customer } from "../customercomponent";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs";
import { RestDataSourceDetail } from "./rest.datasourcedetail";
import { CustomerDetail } from "../customerdetail.model";

@Injectable()
export class Model {
    private customers: Customer[] = new Array<Customer>();
    private locator = (c: Customer, id: number) => c.id == id;

    constructor(private dataSource: RestDataSourceDetail) {
        this.dataSource.getData().subscribe(data => this.customers = data);
        console.log("Model constructor called");
    }

    getCustomers(): Customer[] {
        return this.customers;
    }

    getCustomer(id: number): Customer {
        console.log("Model constructor called Product Name - " + this.customers[id].lastname);
        return this.customers[id];
    }

    saveCustomer(customer: CustomerDetail) {
        if (customer.id == 0 || customer.id == null) {
            this.dataSource.saveCustomerDetail(customer)
            .subscribe(c => this.customers.push(c));
            } else {
            this.dataSource.updateCustomerDetail(customer).subscribe(c => {
            let index = this.customers
            .findIndex(item => this.locator(item, c.id));
            this.customers.splice(index, 1, c);
            });
        }
        console.log("saveProduct called Customer ID - " + customer.id);
    }

    deleteProduct(id: number) {
        this.dataSource.deleteCustomerDetail(id).subscribe(() => {
            let index = this.customers.findIndex(p => this.locator(p, id));
            if (index > -1) {
                this.customers.splice(index, 1);
            }
            console.log("deleteProduct called Customer ID - " + id);
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