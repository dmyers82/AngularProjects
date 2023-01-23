import { Directive, ElementRef, Attribute } from "@angular/core";

@Directive({
    selector: "[pa-attr]",
})

export class PaAttrDirective {
    constructor(element: ElementRef, @Attribute("pa-attr-class") bgClass: string) {
        element.nativeElement.classList.add(bgClass || "bg-success", "text-white");
        console.log("element.nativeElement.classList - " + element.nativeElement.OuterHTML);
    }
}