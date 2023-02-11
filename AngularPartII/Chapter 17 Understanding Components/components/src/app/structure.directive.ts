import { Directive, Input, Output, EventEmitter,
    SimpleChange, ContentChildren, QueryList, ViewContainerRef, TemplateRef } from "@angular/core";
import { PaCellColor } from "./cellColor.directive";

@Directive({
    selector: "[paIf]"
})

export class PaStructureDirective {

    constructor(private container: ViewContainerRef,
        private template: TemplateRef<Object>) { 
            console.log("PaStructureDirective constructor called");
        }
    
    @Input("paIf")
    expressionResult: boolean;
    
    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        let change = changes["expressionResult"];
        if (!change.isFirstChange() && !change.currentValue) {
            this.container.clear();
        } else if (change.currentValue) {this.container.createEmbeddedView(this.template);}
    }
}