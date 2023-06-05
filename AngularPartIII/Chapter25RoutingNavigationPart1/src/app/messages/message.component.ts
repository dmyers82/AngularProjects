import { Component, Inject } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { MODES, SharedState, SHARED_STATE } from "../core/sharedState.model";
import { Model } from "../model/repository.model"
import { Observable } from "rxjs";
import { Router, NavigationEnd, NavigationCancel } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
    selector: "paMessages",
    templateUrl: "message.component.html",
})

export class MessageComponent {
    lastMessage: Message;
    constructor(messageService: MessageService, router: Router) {
        console.log("MessageComponent constructor called.");
        messageService.messages.subscribe(m => this.lastMessage = m);
        router.events
        .pipe(filter(e => e instanceof NavigationEnd
        || e instanceof NavigationCancel))
        .subscribe(e => { this.lastMessage = null; });
        console.log("MessageComponent constructor call complete.");
    }
}