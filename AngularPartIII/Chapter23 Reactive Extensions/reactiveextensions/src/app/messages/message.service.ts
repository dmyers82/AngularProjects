import { Injectable } from "@angular/core";
import { Message } from "./message.model";
import { Observable } from "rxjs";
import { Subject } from "rxjs";

@Injectable()

export class MessageService {
    private subject = new Subject<Message>();
    private handler: (m: Message) => void;

    reportMessage(msg: Message) {
        this.subject.next(msg);
        console.log("reportMessage called");
        /* if (this.handler != null) {
            this.handler(msg);
            console.log("reportMessage called");
        } */
    }

    get messages(): Observable<Message> {
        return this.subject;
    }
    
    registerMessageHandler(handler: (m: Message) => void) {
        this.handler = handler;
        console.log("registerMessageHandler called");
    }
}