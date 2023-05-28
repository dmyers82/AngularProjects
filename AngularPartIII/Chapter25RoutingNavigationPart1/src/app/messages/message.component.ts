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
    deleting: boolean = false;

    constructor(private model: Model, messageService: MessageService, @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>){
        stateEvents.subscribe((update) => {
            
            this.editing = update.mode == MODES.EDIT;

            this.deleting = update.mode == MODES.DELETE;

            console.log("MessageComponent constructor MODE - " + this.editing);

            
            if (this.editing != false){
                this.lastMessage = new Message("EDIT " + this.model.getProduct(update.id).name);
            }else{
                if (this.deleting != false){
                    this.lastMessage = new Message("DELETE");
                }else{
                    this.lastMessage = new Message("CREATE ");
                }
            }
            
           
            console.log("MessageComponent constructor called - " + this.lastMessage);

        });

        messageService.messages.subscribe(m => this.lastMessage = m);
    }    
}