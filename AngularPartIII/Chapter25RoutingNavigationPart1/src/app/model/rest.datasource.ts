import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Product } from "./product.model";
import { catchError } from "rxjs/operators";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {

    constructor(private http: HttpClient,
        @Inject(REST_URL) private url: string) {console.log("RestDataSource constructor called");}

    getData(): Observable<Product[]> {
        return this.sendRequest<Product[]>("GET", this.url);
        console.log("getData called url - " + this.url);
        //return this.http.get<Product[]>(this.url);
    }

    saveProduct(product: Product): Observable<Product> {
        return this.sendRequest<Product>("POST", this.url, product);
        console.log("saveProduct called url - " + this.url);
        //return this.http.post<Product>(this.url, product);
    }
        
    updateProduct(product: Product): Observable<Product> {
        return this.sendRequest<Product>("PUT",
            `${this.url}/${product.id}`, product);
        console.log("updateProduct called url - " + this.url);
        //return this.http.put<Product>(`${this.url}/${product.id}`, product);
    }
        
    deleteProduct(id: number): Observable<Product> {
        return this.sendRequest<Product>("DELETE", `${this.url}/${id}`);
        console.log("deleteProduct called url - " + this.url);
        //return this.http.delete<Product>(`${this.url}/${id}`);
    }

    private sendRequest<T>(verb: string, url: string, body?: Product)
        : Observable<T> {

        let myHeaders = new HttpHeaders();
        myHeaders = myHeaders.set("Access-Key", "<secret>");
        myHeaders = myHeaders.set("Application-Names", ["exampleApp", "proAngular"]);

        console.log("sendRequest called verb - " + verb + " url " + url);

        return this.http.request<T>(verb, url, {
            body: body,
            headers: myHeaders}).pipe(catchError((error: Response) =>
            throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }
}