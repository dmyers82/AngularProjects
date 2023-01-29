import { Directive, ElementRef, Attribute, Input, SimpleChange} from "@angular/core";

@Directive({
    selector: "[pa-attr]",
})

export class PaAttrDirective {
    constructor(private element: ElementRef) {
        console.log("element.nativeElement.classList - " + element.nativeElement.OuterHTML);
    }

    @Input("pa-attr")
    bgClass: string;

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