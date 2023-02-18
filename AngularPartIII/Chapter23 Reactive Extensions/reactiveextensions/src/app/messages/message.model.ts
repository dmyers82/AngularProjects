export class Message {
    constructor(public text: string,
    public error: boolean = false) {
        console.log("Message constructor called");
     }
}