import { Customer } from "./customer.model";
export class CustomerDataSource {
    private data: Customer[];

    constructor() {
        this.data = new Array<Customer>(
        new Customer(1, "Dannie", "S.", "Myers", "123-45-6789", 1234567890 ),
        new Customer(2, "Todd", "", "Beisman", "423-56-6879", 1234509876 ),
        new Customer(3, "Siji", "", "Anil", "454-56-6824", 1234509876 ),
        new Customer(4, "Matthew", "R.", "Melvin", "513-56-1708", 1234509876 ),
        new Customer(5, "Robin", "D.", "Myers", "321-54-9876", 5987654321 ),
        new Customer(6, "Harold", "G.","Reynolds", "213-67-6879", 543216789),
        new Customer(7, "Liza", "P.", "Minelli", "987-12-0987", 678954321),
        new Customer(8, "Ruby", "T.", "Tuesday", "456-86-2340", 160948323));
    }

    getData(): Customer[] {
        return this.data;
    }
}