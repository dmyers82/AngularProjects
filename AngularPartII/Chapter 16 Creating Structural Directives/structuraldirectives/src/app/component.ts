import { ApplicationRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { ProductFormGroup, ProductFormControl } from "./form.model";

@Component({
        selector: "app",
        templateUrl: "template.html"
})

export class ProductComponent {
    model: Model = new Model();
    formGroup: ProductFormGroup = new ProductFormGroup();
    showTable: boolean = false;

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }
  
    newProduct: Product = new Product();

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }

    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
        this.model.saveProduct(p);
    }

 
    formSubmitted: boolean = false;

    submitForm() {
        /* Object.keys(this.formGroup.controls)
            .forEach(c => this.newProduct[c] = this.formGroup.controls[c].value); */
        this.addProduct(this.newProduct);
    }
}