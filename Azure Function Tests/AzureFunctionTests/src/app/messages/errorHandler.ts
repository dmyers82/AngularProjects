import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Injectable()

export class MessageErrorHandler implements ErrorHandler {
    constructor(private messageService: MessageService, private ngZone: NgZone) {
        console.log("MessageErrorHandler constructor called");
}

    handleError(error) {

        let msg = error instanceof Error ? error.message : error.toString();
        console.log("handleError called message - " + error.message);
        this.ngZone.run(() => this.messageService
        .reportMessage(new Message(msg, true)), 0);
    }

}