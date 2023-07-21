import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { CustomerDetail } from "../customerdetail.model"
import { catchError } from "rxjs/operators";
import { CustomerAzure } from "../customerazure.model";
import { CustomerAzure2 } from "../customerazure.model2";

export const REST_URL_AZURE = new InjectionToken("rest_url_azure");

@Injectable()
export class RestDataSourceAzure {

    azurecustomers:CustomerAzure;
    azurecustomer:CustomerAzure2;
    jsonobject:JSON;

    constructor(private http: HttpClient,
        @Inject(REST_URL_AZURE) private url: string) {console.log("RestDataSourceDetailAzure constructor called");}

    /* getDataAzure(id:number): Observable<CustomerAzure2> {
        console.log("getDataAzure called url - " + this.url);
        return this.sendRequest<CustomerAzure2>("GET", this.url + "?id="+ id, this.azurecustomer);
        // return this.http.get<CustomerDetail[]>(this.url);
    } */

    getDataAzure(id:number): Observable<CustomerAzure2> {
        console.log("getDataAzure called url - " + this.url);
        return this.sendRequest<CustomerAzure2>("GET", this.url + "?id="+ id, this.azurecustomer);
        // return this.http.get<CustomerDetail[]>(this.url);
    }
    
    saveAzureCustomer(customer: CustomerAzure): Observable<CustomerAzure> {
        console.log("saveCustomerDetail called url - " + this.url);
        return this.http.post<CustomerAzure>(this.url, customer);
    }

    updateAzureCustomer(customer: CustomerAzure): Observable<CustomerAzure> {
        console.log("updateAzureCustomer called url - " + this.url);
        return this.http.put<CustomerAzure>(`${this.url}/${customer.id}`, customer);
    }

    deleteAzureCustomer(id: number): Observable<CustomerAzure> {
        console.log("deleteAzureCustomer called url - " + this.url);
        return this.http.delete<CustomerAzure>(`${this.url}/${id}`);
    }

    private sendRequest<T>(verb: string, url: string, body?: CustomerAzure)
        : Observable<T> {

        let myHeaders = new HttpHeaders({'Content-Type': 'application/json'});


        /*  let myHeaders = new HttpHeaders();
        myHeaders = myHeaders.set("Access-Key", "<secret>");
        myHeaders = myHeaders.set("Application-Names", ["AzureFunction", "proAngular"]);
        */
        console.log("sendRequest called verb - " + verb + " url " + url );
        //console.log("sendRequest called verb - " + verb + " url " + url + " body - " + body.fullname);

        return this.http.request<T>(verb, url, {
            body: body, headers: myHeaders}).pipe(catchError((error: Response) =>
            throwError(`Network Error: ${error.statusText} (${error.status})`)));

        /* return this.http.request<T>(verb, url, {
            body: body,
            headers: myHeaders}).pipe(catchError((error: Response) =>
            throwError(`Network Error: ${error.statusText} (${error.status})`))); */
    }
}