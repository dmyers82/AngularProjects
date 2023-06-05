import { Component, Inject } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
//import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
//import { Observer } from "rxjs";

@Component({
    selector: "paTable",
    templateUrl: "table.component.html"
})

export class TableComponent {
    constructor(private model: Model
        /*@Inject(SHARED_STATE) public observer: Observer<SharedState>*/) { 
            console.log("TableComponent constructor called.");
        }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    deleteProduct(key: number) {
        // this.observer.next(new SharedState(MODES.DELETE));
        this.model.deleteProduct(key);
        console.log("deleteProduct called key - " + key);
    }

    /* editProduct(key: number) {
        this.observer.next(new SharedState(MODES.EDIT, key - 1));
        console.log("editProduct called key - " + key);
    } */

    /* createProduct() {
        this.observer.next(new SharedState(MODES.CREATE));
    } */
}