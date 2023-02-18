import { Component } from "@angular/core";
//import { console } from "console";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { MODES, SharedState } from "./sharedState.model";

@Component({
    selector: "paTable",
    templateUrl: "table.component.html"
})

export class TableComponent {
    constructor(private model: Model, private state: SharedState) 
    { 
        console.log("TableComponent called");    
    }
    getProduct(key: number): Product {
    return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }

    editProduct(key: number) {
        this.state.id = key - 1;
        this.state.mode = MODES.EDIT;
        console.log("editProduct called; key- " + key);
    }

    createProduct() {
        this.state.id = 0;
        this.state.mode = MODES.CREATE;
    }
}