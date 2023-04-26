import { Injectable } from "@angular/core";
import { RestDataSourceDetail } from "./rest.datasourcedetail";
import { CustomerDetail } from "../customerdetail.model";

import { RestDataSourceAzure} from "./rest.datasourceazure"
import { CustomerAzure} from "../customerazure.model"
import { CustomerAzure2} from "../customerazure.model2"

@Injectable()
export class ModelAzure {
    private azureCustomers: CustomerAzure[] = new Array<CustomerAzure>();
    private azureCustomer: CustomerAzure;
    private azurecustomer2: CustomerAzure2;
    private locator = (c: CustomerAzure, id: number) => c.id == id;

    constructor(private dataSource: RestDataSourceAzure) {
        console.log("ModelAzure constructor called");
        //this.dataSource.getDataAzure().subscribe(data => this.azureCustomers = data);
    }

    getAzureCustomers(): CustomerAzure[] {
        return this.azureCustomers;
    }

    getAzureCustomer(id: number): CustomerAzure2 {
        console.log("getAzureCustomer called id - " + id);
        this.dataSource.getDataAzure(id).subscribe(data => this.azureCustomer = data);
        return this.azureCustomer;
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

    /* private generateID(): number {
        let candidate = 100;
        while (this.getAzureCustomer(candidate) != null) {
            candidate++;
        }
        return candidate;
    } */
}