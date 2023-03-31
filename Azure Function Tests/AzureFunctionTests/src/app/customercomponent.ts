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

    foundCustomer: Customer;

    foundCustomerDetail: CustomerDetail;

    customerList: Array<Customer>;

    fullname: string;

    optPersonal:boolean = true;

    editing: boolean = false;

    constructor(private model: Model, private modeldetail: ModelDetail,
        @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>) {
        stateEvents
        .subscribe(update => {
        console.log("CustomerComponent constructor called");
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
        console.log("addCustomer called: " + c.firstname + " " + c.lastname);
        (this.model.saveCustomer(c));
    }

    deleteCustomer(key:number){
        console.log("deleteCustomer called; key " + key);
        this.model.deleteCustomer(key);
    }

    saveCustomer(c:Customer){
        this.model.saveCustomer(c);
    }

    getCustomer(key: number): Customer {
        this.foundCustomer = this.model.getCustomer(key);
        this.fullname = this.foundCustomer.firstname + " " + this.foundCustomer.lastname;
        console.log("getCustomer called - " + this.fullname);
        return this.foundCustomer;
    }

    getCustomerDetail(key: number) : CustomerDetail {
        this.foundCustomerDetail = this.modeldetail.getCustomerDetail(key);
        this.fullname = this.foundCustomerDetail.fullname;
        console.log("getCustomerDetail called - " + this.fullname);
        console.log("Phone Number - " + this.foundCustomerDetail.phone);
        return this.foundCustomerDetail;
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

    getAzureCustomer(){

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
