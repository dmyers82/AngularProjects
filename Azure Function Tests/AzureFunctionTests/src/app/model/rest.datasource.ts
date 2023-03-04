import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Customer } from "../customer.model";
import { catchError } from "rxjs/operators";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {

    constructor(private http: HttpClient,
        @Inject(REST_URL) private url: string) {console.log("RestDataSource constructor called");}

    getData(): Observable<Customer[]> {
        console.log("getData called url - " + this.url);
        return this.http.get<Customer[]>(this.url);
        //return this.http.get<Product[]>(this.url);
    }

    saveCustomer(customer: Customer): Observable<Customer> {
        console.log("saveCustomer called url - " + this.url);
        return this.http.post<Customer>(this.url, customer);
    }

    updateCustomer(customer: Customer): Observable<Customer> {
        console.log("updateCustomer called url - " + this.url);
        return this.http.put<Customer>(`${this.url}/${customer.id}`, customer);
    }

    deleteCustomer(id: number): Observable<Customer> {
        console.log("deleteCustomer called url - " + this.url);
        return this.http.delete<Customer>(`${this.url}/${id}`);
    }

    private sendRequest<T>(verb: string, url: string, body?: Customer)
        : Observable<T> {

        let myHeaders = new HttpHeaders();
        myHeaders = myHeaders.set("Access-Key", "<secret>");
        myHeaders = myHeaders.set("Application-Names", ["AzureFunction", "proAngular"]);

        console.log("sendRequest called verb - " + verb + " url " + url);

        return this.http.request<T>(verb, url, {
            body: body,
            headers: myHeaders}).pipe(catchError((error: Response) =>
            throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }
}