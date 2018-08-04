import { Component } from "../../../node_modules/@angular/core";
import { EmployeeModel } from "../model/employee.model";

@Component({
    selector : 'travel-request',
    templateUrl:'./travelrequest.component.html'
})
export class TravelRequestComponent{

    employee : EmployeeModel;

    constructor(){
        
    }
}