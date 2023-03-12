import { Pipe } from "@angular/core";
import { SharedState, MODES } from "./sharedState.model";
import { Model } from "../model/repository.model";

@Pipe({
    name: "formatState",
    pure: true
})

export class StatePipe {
    constructor(private model: Model) { }
    transform(value: any): string {
        if (value instanceof SharedState) {
            let state = value as SharedState;
            return MODES[state.mode] + (state.id != undefined
            ? ` ${this.model.getCustomer(state.id).lastname}` : "");
        } else {
            return "<No Data>"
        }
    }
}