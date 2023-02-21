import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {

    constructor(private http: HttpClient,
        @Inject(REST_URL) private url: string) { }

    getData(): Observable<Product[]> {
        return this.sendRequest<Product[]>("GET", this.url);
        //return this.http.get<Product[]>(this.url);
    }

    saveProduct(product: Product): Observable<Product> {
        return this.sendRequest<Product>("POST", this.url, product);
        //return this.http.post<Product>(this.url, product);
    }
        
    updateProduct(product: Product): Observable<Product> {
        return this.sendRequest<Product>("PUT",
            `${this.url}/${product.id}`, product);
        //return this.http.put<Product>(`${this.url}/${product.id}`, product);
    }
        
    deleteProduct(id: number): Observable<Product> {
        return this.sendRequest<Product>("DELETE", `${this.url}/${id}`);
        //return this.http.delete<Product>(`${this.url}/${id}`);
    }

    private sendRequest<T>(verb: string, url: string, body?: Product)
            : Observable<T> {
        return this.http.request<T>(verb, url, {
            body: body
        });
    }
}