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
            return MODES[state.mode]
            return MODES[state.mode] + (state.id != undefined && state.id < 6
            ? ` ${this.model.getProduct(state.id).name}` : "");
            console.log("transform called - getProduct state id - " + state.id);
        }else {
            return "<No Data>"
        }
    }
}