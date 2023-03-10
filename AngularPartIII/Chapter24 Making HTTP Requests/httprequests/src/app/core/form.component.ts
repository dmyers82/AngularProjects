import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model"
import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";

@Component({
    selector: "paForm",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})

export class FormComponent {
    product: Product = new Product();

    constructor(private model: Model,
        @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>) {
        // .pipe(skipWhile(state => state.mode == MODES.EDIT))
        // .pipe(distinctUntilChanged((firstState, secondState) =>
        // firstState.mode == secondState.mode
        // && firstState.id == secondState.id))

        stateEvents
        .subscribe(update => {
        this.product = new Product();
        if (update.id != undefined) {
            Object.assign(this.product, this.model.getProduct(update.id));
        }
        this.editing = update.mode == MODES.EDIT;
        console.log("FormComponent constructor called update id " + update.id);
        console.log("FormComponent constructor called update mode " + update.mode);
        });
        }

    editing: boolean = false;

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.product = new Product();
            form.reset();
        }
    }

    resetForm() {
        this.product = new Product();
    }
}