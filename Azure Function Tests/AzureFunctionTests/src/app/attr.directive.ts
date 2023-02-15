import { Directive, ElementRef, Attribute, Input, SimpleChange } from "@angular/core";

@Directive({
    selector: "[pa-attr]",
})

export class PaAttrDirective {
    constructor(private element: ElementRef, @Attribute("pa-attr-class") bgClass: string) {
        console.log("PaAttrDirective constructor called.");
        console.log("element.nativeElement.classList - " + element.nativeElement.innerHTML);
        element.nativeElement.classList.add(bgClass || "bg-success", "text-white");
    }

    @Input("pa-attr")
    bgClass: string;

    ngOnInit() {
        this.element.nativeElement.classList.add(this.bgClass || "bg-success",
                                                "text-white");
    }

   /*  ngOnChanges(changes: {[property: string]: SimpleChange }) {
        let change = changes["bgClass"];
        let classList = this.element.nativeElement.classList;
        if (!change.isFirstChange() && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue);
        }
        if (!classList.contains(change.currentValue)) {
            classList.add(change.currentValue);
        }
    } */
}