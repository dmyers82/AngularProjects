import { NgModule } from "@angular/core";
import { Model } from "./repository.model";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSourceDetail, REST_URL_DETAIL } from "./rest.datasourcedetail";

@NgModule({
    imports: [HttpClientModule],
    providers: [Model, RestDataSourceDetail,
        { provide: REST_URL_DETAIL, useValue: `http://${location.hostname}:3700/customerdetail` }]
    //providers: [Model, StaticDataSource]
})
export class ModelDetailModule { }