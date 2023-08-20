import {CustomerAzure } from "./customerazure.model"
import { CustomerAcctsAzure } from "./customeracctsazure.model";
export class CustomerAzure2 {
    constructor(public id?: any,
    public fullname?: string,
    public firstname?: string,
    public middleinitial?: string,
    public lastname?: string,
    public address?: string,
    public address2?: string,
    public email?: number,
    public City?: string,
    public State?: string,
    public Zip?: number,
    public SSN?: string,
    public DOB?: string,
    public Mobile?: string,
    public Occupation?: string,
    public Error?: string,
    public Accts?: CustomerAcctsAzure) { }
}