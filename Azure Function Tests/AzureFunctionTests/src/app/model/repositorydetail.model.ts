import { Injectable } from "@angular/core";
import { Customer } from "../customercomponent";
// import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs";
import { RestDataSourceDetail } from "./rest.datasourcedetail";
import { CustomerDetail } from "../customerdetail.model";

@Injectable()
export class ModelDetail {
    private customerDetails: CustomerDetail[] = new Array<CustomerDetail>();
    private locator = (c: CustomerDetail, id: number) => c.id == id;

    constructor(private dataSource: RestDataSourceDetail) {
        this.dataSource.getDataDetail().subscribe(data => this.customerDetails = data);
        console.log("Model constructor called");
    }

    getCustomerDetails(): CustomerDetail[] {
        return this.customerDetails;
    }

    getCustomerDetail(id: number): Customer {
        console.log("Model constructor called Product Name - " + this.customerDetails[id].fullname);
        return this.customerDetails[id];
    }

    saveCustomerDetail(customerdetail: CustomerDetail) {
        if (customerdetail.id == 0 || customerdetail.id == null) {
            this.dataSource.saveCustomerDetail(customerdetail)
            .subscribe(c => this.customerDetails.push(c));
            } else {
            this.dataSource.updateCustomerDetail(customerdetail).subscribe(c => {
            let index = this.customerDetails
            .findIndex(item => this.locator(item, c.id));
            this.customerDetails.splice(index, 1, c);
            });
        }
        console.log("saveProduct called Customer ID - " + customerdetail.id);
    }

    deleteCustomerDetail(id: number) {
        this.dataSource.deleteCustomerDetail(id).subscribe(() => {
            let index = this.customerDetails.findIndex(p => this.locator(p, id));
            if (index > -1) {
                this.customerDetails.splice(index, 1);
            }
            console.log("deleteProduct called Customer ID - " + id);
        });
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getCustomerDetail(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}