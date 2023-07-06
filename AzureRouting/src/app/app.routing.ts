import { Routes, RouterModule } from "@angular/router";
import { MainMenuComponent} from "./mainmenu.component";
import { PersonalDemographComponent} from "./customerinfo/personaldemographics/personaldemograph.component";
import { NameListComponent} from "./search/namelist.component";
import { SearchCustomerComponent } from "./search/searchcustomer";
import { ProductsComponent } from "./purchases/products.component";
import { CustomerFolderComponent } from "./customerinfo/customerfolder.component";
const routes: Routes = [
    //{ path: "form/:businessdemograph", component: BusinessDemographComponent },
    { path: "form/searchcustomer", component: SearchCustomerComponent },
    { path: "form/products", component: ProductsComponent},
    { path: "form/personaldemograph", component: PersonalDemographComponent },
    { path: "form/namelist", component: NameListComponent },
    { path: "form/customerfolder", component: CustomerFolderComponent },
    { path: "", component: MainMenuComponent }]
export const routing = RouterModule.forRoot(routes);
    