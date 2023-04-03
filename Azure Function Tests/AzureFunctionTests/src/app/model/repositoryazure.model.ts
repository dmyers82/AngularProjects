import { Injectable } from "@angular/core";
import { RestDataSourceDetail } from "./rest.datasourcedetail";
import { CustomerDetail } from "../customerdetail.model";

import { RestDataSourceAzure} from "./rest.datasourceazure"
import { CustomerAzure} from "../customerazure.model"

@Injectable()
export class ModelAzure {
    private azureCustomers: CustomerAzure[] = new Array<CustomerAzure>();
    private locator = (c: CustomerAzure, id: number) => c.id == id;

    constructor(private dataSource: RestDataSourceAzure) {
        this.dataSource.getDataAzure().subscribe(data => this.azureCustomers = data);
        console.log("ModelAzure constructor called");
    }

    getAzureCustomers(): CustomerAzure[] {
        return this.azureCustomers;
    }

    getAzureCustomer(id: number): CustomerAzure {
        console.log("getAzureCustomer called Azure Name - " + this.azureCustomers[id].fullname);
        return this.azureCustomers[id];
    }

    saveAzureCustomer(azurecustomer: CustomerAzure) {
        if (azurecustomer.id == 0 || azurecustomer.id == null) {
            this.dataSource.saveAzureCustomer(azurecustomer)
            .subscribe(c => this.azureCustomers.push(c));
            } else {
            this.dataSource.updateAzureCustomer(azurecustomer).subscribe(c => {
            let index = this.azureCustomers
            .findIndex(item => this.locator(item, c.id));
            this.azureCustomers.splice(index, 1, c);
            });
        }
        console.log("saveProduct called Customer ID - " + azurecustomer.id);
    }

    deleteAzureCustomer(id: number) {
        this.dataSource.deleteAzureCustomer(id).subscribe(() => {
            let index = this.azureCustomers.findIndex(c => this.locator(c, id));
            if (index > -1) {
                this.azureCustomers.splice(index, 1);
            }
            console.log("deleteAzureCustomer called Customer ID - " + id);
        });
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getAzureCustomer(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}