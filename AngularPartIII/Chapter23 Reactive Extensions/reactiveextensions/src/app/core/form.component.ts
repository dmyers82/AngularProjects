import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
import { Observable } from "rxjs";
import { filter, map, distinctUntilChanged } from "rxjs/operators";

@Component({
    selector: "paForm",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})

export class FormComponent {
    product: Product = new Product();
    lastId: number;

    constructor(private model: Model,
        @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>) {
        
        stateEvents.pipe(map(state => new SharedState(state.mode, state.id == 5
                ? 1 : state.id)))
        stateEvents.pipe(distinctUntilChanged())
        stateEvents.pipe(filter(state => state.id != 3))
        //stateEvents.pipe(filter(state => state.id < 6))
        stateEvents.subscribe((update) => {
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

    /*get editing(): boolean {
        return this.state.mode == MODES.EDIT;
    }*/

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.product = new Product();
            console.log("submitForm called");
            form.reset();
        }
    }

    resetForm() {
        this.product = new Product();
    }

    /* ngDoCheck() {
        if (this.lastId != this.state.id) {
            this.product = new Product();
            if (this.state.mode == MODES.EDIT) {
                Object.assign(this.product, this.model.getProduct(this.state.id));
            }
            console.log("ngDoCheck called - last.id - " + this.lastId);
            console.log("ngDoCheck called - state.id - " + this.state.id);
            this.lastId = this.state.id;
        }
    } */
}