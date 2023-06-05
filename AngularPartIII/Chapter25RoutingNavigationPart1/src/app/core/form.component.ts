import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model"
import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    selector: "paForm",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})

export class FormComponent {
    product: Product = new Product();

    constructor(private model: Model, activeRoute: ActivatedRoute, private router: Router) {
        console.log("FormComponent constructor called. Active Route - " + activeRoute.snapshot.url[1].path);
        console.log("FormComponent constructor called. Router - " + router.url);
        this.editing = activeRoute.snapshot.params["mode"] == "edit"; //Parameter routing
        let id = activeRoute.snapshot.params["id"];
        if (id != null) {
            let name = activeRoute.snapshot.params["name"];
            let category = activeRoute.snapshot.params["category"];
            let price = activeRoute.snapshot.params["price"];
            if (name != null && category != null && price != null) {
                this.product.id = id;
                this.product.name = name;
                this.product.category = category;
                this.product.price = Number.parseFloat(price);
            } else {
                Object.assign(this.product, model.getProduct(id) || new Product());
            }
        }
        //this.editing = activeRoute.snapshot.url[1].path == "edit";
        console.log("FormComponent constructor called.");
    }

    editing: boolean = false;

    submitForm(form: NgForm) {
        if (form.valid) {
            //this.model.saveProduct(this.product);
            //this.product = new Product();
            console.log("FormComponent submitForm called.");
            form.reset();
        }
    }

    resetForm() {
        console.log("FormComponent resetForm called.");
        this.product = new Product();
    }
}