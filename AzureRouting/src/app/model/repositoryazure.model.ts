import { Injectable } from "@angular/core";
import { RestDataSourceAzure} from "./rest.datasourceazure"
import { CustomerAzure} from "./customerazure.model"
import { CustomerAzure2} from "./customerazure.model2"

@Injectable()
export class ModelAzure {
    private azureCustomers: CustomerAzure[] = new Array<CustomerAzure>();
    private azurecustomer2!: CustomerAzure2;
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
        this.dataSource.getDataAzure(id).subscribe(data => this.azurecustomer2 = data);
        return this.azurecustomer2;
    }
}