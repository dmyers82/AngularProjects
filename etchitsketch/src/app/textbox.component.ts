import {Component} from '@angular/core';
@Component({
    selector: 'text-app',
    templateUrl: './textbox.component.html'
})
export class TextBoxComponent {
    handleInput(event: Event) {
        this.myMsg = (event.target as HTMLInputElement).value;
    }
	myMsg: string = 'Hello World!';
}   