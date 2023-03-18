import { Component, Inject } from "@angular/core"
import { Customer } from "./customer.model";
import { CustomerModel } from "./customerrepository.model";
import { CustomerDetail} from "./customerdetail.model"
import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { MODES, SharedState, SHARED_STATE } from "./core/sharedState.model";
import { Model } from "./model/repository.model";
import { ModelDetail } from "./model/repositorydetail.model";

@Component({
    selector: "app",
    templateUrl: "customersearch.html"
})

//Equalivent to Product Component (See Page 537)
export class CustomerComponent {
   
    // model: CustomerModel = new CustomerModel();

    newCustomer: Customer = new Customer();

    customer: Customer = new Customer();

    customerDetail: CustomerDetail = new CustomerDetail();

    foundCustomerDetail: Customer;

    customerList: Array<Customer>;

    fullname: string;

    optPersonal:boolean = true;

    editing: boolean = false;

    constructor(private model: Model, private modeldetail: ModelDetail,
        @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>) {
        stateEvents
        .subscribe(update => {
        this.customer = new Customer();
        if (update.id != undefined) {
            Object.assign(this.customer, this.model.getCustomer(update.id));
        }
        this.editing = update.mode == MODES.EDIT;
        });
    }

    get jsonProduct() {
        return JSON.stringify(this.newCustomer);
    }

    addCustomer(c: Customer) {
        console.log("New Customer: " + this.jsonProduct);
        (this.model.saveCustomer(c));
    }

    getCustomer(key: number): Customer {
        this.foundCustomerDetail = this.model.getCustomer(key);
        this.fullname = this.foundCustomerDetail.firstname + " " + this.foundCustomerDetail.lastname;
        console.log("getCustomer called - " + this.fullname);
        return this.foundCustomerDetail;
    }

    getCustomerDetail(key: number) : CustomerDetail {
        this.foundCustomerDetail = this.model.getCustomer(key);
        this.fullname = this.foundCustomerDetail.firstname + " " + this.foundCustomerDetail.lastname;
        console.log("getCustomerDetail called - " + this.fullname);
        return this.customerDetail;
    }

    getCustomers(): Customer[] {
        return this.model.getCustomers();
    }

    getCustomerCount(): number {
        return this.getCustomers().length;
    }

    selectedCustomer: number;

    getSelected(customer: Customer): boolean {
        return customer.id == this.selectedCustomer;
    }

    getFolderType(personal:boolean){
        this.optPersonal = personal;
        console.log("getFolderType called - " + personal.valueOf());
    }

    formSubmitted: boolean = false;

    submitForm() {
        console.log("Submit Form Called");
        this.addCustomer(this.newCustomer);
    }

    resetForm(){
        this.customer = new Customer();
    }
}

export { Customer };
