import { Customer } from "./customer.model"
import { CustomerDataSource } from "./customerdatasource.model"

export class CustomerModel {
    private customerdataSource: CustomerDataSource;
    private customers: Customer[];

    constructor() {
        this.customerdataSource = new CustomerDataSource();
        this.customers = new Array<Customer>();
        this.customerdataSource.getData().forEach(p => this.customers.push(p));
    }
}