import { Component } from "@angular/core";
import { EmployeeModel } from "../model/employee.model";
import { AmexioTabComponent } from "../../../node_modules/amexio-ng-extensions";
import { TravelRequestComponent } from "./travelrequest.component";

@Component({
    selector : 'employee-registration',
    templateUrl : './employee.registration.component.html'
})
export class EmployeeRegistrationComponent {

    employee : EmployeeModel;

    constructor(){

        this.employee = new EmployeeModel();

    }

    onRowSelect(data:EmployeeModel){
        this.employee = data;
    }

    onEdit(data:EmployeeModel, amexiotab: AmexioTabComponent){
        this.employee = data;
        amexiotab.setActiveTab(2);
    }

    raiseTravelRequest(data:EmployeeModel, amexiotab: AmexioTabComponent){
        const travelrequest : TravelRequestComponent = amexiotab.addDynamicTab(data.firstname,'red',true,TravelRequestComponent);
        travelrequest.employee = data;

    }

    saveForm(){
        
    }
}