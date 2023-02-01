import { Input, Output, EventEmitter, Directive,
    HostBinding, HostListener, SimpleChange } from "@angular/core";

@Directive({
    selector: "input[paModel]"
})

export class PaModel {
    @Input("paModel")
    modelProperty: string;

    @HostBinding("value")
    fieldValue: string = "";

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        let change = changes["modelProperty"];
        console.log("ngOnChanges change.currentvalue: " + change.currentValue);
        console.log("ngOnChanges this.fieldvalue: " + this.fieldValue);
        if (change.currentValue != this.fieldValue) {
            this.fieldValue = changes["modelProperty"].currentValue || "";
        }
    }

    @Output("paModelChange")
    update = new EventEmitter<string>();

    @HostListener("input", ["$event.target.value"])
    updateValue(newValue: string) {
        this.fieldValue = newValue;
        this.update.emit(newValue);
    }
}   