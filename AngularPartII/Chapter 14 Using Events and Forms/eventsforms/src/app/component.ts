import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
        selector: "app",
        templateUrl: "template.html"
})

export class ProductComponent {
    model: Model = new Model();

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }
  
    selectedProduct: string;
    getSelected(product: Product): boolean {
        console.log("getselected - " + product.name);
        return product.name == this.selectedProduct;
    }
}