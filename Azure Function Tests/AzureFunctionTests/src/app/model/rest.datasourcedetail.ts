import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Customer } from "../customer.model";
import { CustomerDetail } from "../customerdetail.model"
import { catchError } from "rxjs/operators";

export const REST_URL_DETAIL = new InjectionToken("rest_url_detail");

@Injectable()
export class RestDataSourceDetail {

    constructor(private http: HttpClient,
        @Inject(REST_URL_DETAIL) private url: string) {console.log("RestDataSourceDetail constructor called");}

    getDataDetail(): Observable<CustomerDetail[]> {
        console.log("getDataDetail called url - " + this.url);
        return this.http.get<CustomerDetail[]>(this.url);
    }

    saveCustomerDetail(customer: CustomerDetail): Observable<CustomerDetail> {
        console.log("saveCustomerDetail called url - " + this.url);
        return this.http.post<CustomerDetail>(this.url, customer);
    }

    updateCustomerDetail(customer: CustomerDetail): Observable<Customer> {
        console.log("updateCustomerDetail called url - " + this.url);
        return this.http.put<CustomerDetail>(`${this.url}/${customer.id}`, customer);
    }

    deleteCustomerDetail(id: number): Observable<CustomerDetail> {
        console.log("deleteCustomerDetail called url - " + this.url);
        return this.http.delete<CustomerDetail>(`${this.url}/${id}`);
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