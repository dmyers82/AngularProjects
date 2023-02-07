import { FormControl } from "@angular/forms";

export class LimitValidator {

    static Limit(limit:number) {
        return (control:FormControl) : {[key: string]: any} => {
            let val = Number(control.value);
            if (!Number.isNaN(val) && val > limit) {
                console.log("LimitValidator:Limit - " + val);
                return {"limit": {"limit": limit, "actualValue": val}};
            } else {
                return null as any;
        }
    }
}
}