import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { Customer } from "../customer.model"
import { Model } from "../model/repository.model"
import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";

@Component({
    selector: "paForm",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})

export class FormComponent {
    customer: Customer = new Customer();

    constructor(private model: Model,
        @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>) {
        // .pipe(skipWhile(state => state.mode == MODES.EDIT))
        // .pipe(distinctUntilChanged((firstState, secondState) =>
        // firstState.mode == secondState.mode
        // && firstState.id == secondState.id))

        stateEvents
        .subscribe(update => {
        this.customer = new Customer();
        if (update.id != undefined) {
            Object.assign(this.customer, this.model.getCustomer(update.id));
        }
        this.editing = update.mode == MODES.EDIT;
        console.log("FormComponent constructor called update id " + update.id);
        console.log("FormComponent constructor called update mode " + update.mode);
        });
        }

    editing: boolean = false;

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveCustomer(this.customer);
            this.customer = new Customer();
            form.reset();
        }
    }

    resetForm() {
        this.customer = new Customer();
    }
}