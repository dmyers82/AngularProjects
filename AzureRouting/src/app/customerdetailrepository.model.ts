import { Customer } from "./customer.model"
import { CustomerDataSource } from "./customerdatasource.model"

export class CustomerModel {
    private customerdataSource: CustomerDataSource;
    private customers: Customer[];
    private locator = (p: Customer, id: number) => p.id == id;

    constructor() {
        this.customerdataSource = new CustomerDataSource();
        this.customers = new Array<Customer>();
        this.customerdataSource.getData().forEach(p => this.customers.push(p));
    }

    getCustomers(): Customer[] {
        return this.customers;
    }

    getCustomer(id: number): Customer {
        return this.customers[id];
    }

    saveCustomer(customer: Customer) {
        console.log("saveCustomer - " + customer.id);
        this.customers.push(customer);
        
       /*  if (customer.id == 0 || customer.id == null) {
            customer.id = this.generateID();
            this.customers.push(customer);
        } else {
            let index = this.customers
            .findIndex(p => this.locator(p, customer.id));
            this.customers.splice(index, 1, customer);
            console.log("index - " + index);
        } */

    }

    deleteCustomer(id: number) {
        let index = this.customers.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.customers.splice(index, 1);
        }
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getCustomer(candidate) != null) {
        candidate++;
    }
    return candidate;
    }
}