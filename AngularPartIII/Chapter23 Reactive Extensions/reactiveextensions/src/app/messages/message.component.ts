import { Component, Inject } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { MODES, SharedState, SHARED_STATE } from "../core/sharedState.model";
import { Model } from "../model/repository.model"
import { Observable } from "rxjs";

@Component({
    selector: "paMessages",
    templateUrl: "message.component.html",
})

export class MessageComponent {
    lastMessage: Message;
    editing: boolean = false;

    constructor(private model: Model, messageService: MessageService, @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>){
        stateEvents.subscribe((update) => {
            
            this.editing = update.mode == MODES.EDIT;

            console.log("MessageComponent constructor MODE - " + this.editing);

            if (this.editing != false){
                this.lastMessage = new Message("EDIT " + this.model.getProduct(update.id).name);
            }else{
                this.lastMessage = new Message("CREATE ");
            }
            
            console.log("MessageComponent constructor called - " + this.lastMessage);

        });
    }

    /* constructor(messageService: MessageService) {
        messageService.messages.subscribe(m => this.lastMessage = m);
        //messageService.registerMessageHandler(m => this.lastMessage = m);
        console.log("MessageComponent constructor called - " + this.lastMessage);
    } */
    
}

export { Message };
