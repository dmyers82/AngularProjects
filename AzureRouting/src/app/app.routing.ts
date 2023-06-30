import { Routes, RouterModule } from "@angular/router";
import { MainMenuComponent} from "./mainmenu.component";
import { PersonalDemographComponent} from "./customerinfo/personaldemographics/personaldemograph.component";
import { NameListComponent} from "./search/namelist.component"
import { SearchCustomerComponent } from "./search/searchcustomer";

const routes: Routes = [
    //{ path: "form/:businessdemograph", component: BusinessDemographComponent },
    { path: "form/:personaldemograph", component: PersonalDemographComponent },
    { path: "form/namelist", component: NameListComponent },
    { path: "form/searchcustomer", component: SearchCustomerComponent },
    { path: "", component: MainMenuComponent }]
export const routing = RouterModule.forRoot(routes);
    