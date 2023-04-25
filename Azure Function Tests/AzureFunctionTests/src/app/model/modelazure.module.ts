import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSourceAzure, REST_URL_AZURE } from "./rest.datasourceazure";
import { ModelAzure } from "./repositoryazure.model";

@NgModule({
    imports: [HttpClientModule],
    providers: [ModelAzure, RestDataSourceAzure,
        { provide: REST_URL_AZURE, useValue: `https://azfcn-enc-denali-customer.azurewebsites.net/api/HttpTriggerEncoreCustomer` }]
})

export class ModelAzureModule { }