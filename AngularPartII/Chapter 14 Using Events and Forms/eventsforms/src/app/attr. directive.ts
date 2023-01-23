import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: "[pa-attr]",
})

export class PaAttrDirective {
    constructor(element: ElementRef) {
        element.nativeElement.classList.add("bg-success", "text-white");
        console.log("element.nativeElement.classList - " + element.nativeElement.OuterHTML);
    }
}