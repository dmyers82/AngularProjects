export class Product {
    constructor(public id?: any,
    public name?: string,
    public category?: string,
    public price?: number)
    {console.log("product.model.ts constructor called")}
}