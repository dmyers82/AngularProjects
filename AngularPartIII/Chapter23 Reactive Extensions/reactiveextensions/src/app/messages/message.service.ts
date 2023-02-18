import { Injectable } from "@angular/core";
import { Message } from "./message.model";

@Injectable()

export class MessageService {
    private handler: (m: Message) => void;
    reportMessage(msg: Message) {
        if (this.handler != null) {
            this.handler(msg);
            console.log("reportMessage called");
        }
    }
    
    registerMessageHandler(handler: (m: Message) => void) {
        this.handler = handler;
        console.log("registerMessageHandler called");
    }
}