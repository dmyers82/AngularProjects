import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  /* template: 
  `<input name="personalname" [(ngModel)]="name" #ctrl="ngModel" required>

  <p>Value: {{ name }}</p>
  <p>Valid: {{ ctrl.valid }}</p>

  <button (click)="setValue()">Set value</button>`, 
  */
  templateUrl: './textbox.component.html',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  myMsg: string = 'Hello World!';

  setValue() {
    this.name = 'Nancy';
  }

  title = 'etchitsketch';
}
