import { Directive, ElementRef, Attribute, Input, SimpleChange, Output, EventEmitter } from "@angular/core";
import { Product } from "./product.model";

@Directive({
    selector: "[pa-attr]",
})

export class PaAttrDirective {
    constructor(private element: ElementRef) {
        this.element.nativeElement.addEventListener("click", e => {
            if (this.product != null) {
                this.click.emit(this.product.category);
                console.log("this.product.category - " + this.product.category.toString);
            }
            console.log("element.nativeElement.classList - " + element.nativeElement.OuterHTML);
        });
    }

    @Input("pa-attr")
    bgClass: string;

    @Input("pa-product")
    product: Product;

    @Output("pa-category")
    click = new EventEmitter<string>();

    ngOnInit() {
        console.log("ngOnInit called");
        this.element.nativeElement.classList.add(this.bgClass || "bg-success",
            "text-white");
    }

    ngOnChanges(changes: {[property: string]: SimpleChange }) {
        console.log("ngOnChanges called");
        let change = changes["bgClass"];
        let classList = this.element.nativeElement.classList;
        if (!change.isFirstChange() && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue);
        }
        if (!classList.contains(change.currentValue)) {
            classList.add(change.currentValue);
        }
    }
}