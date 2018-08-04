import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AmexioWidgetModule, AmexioChartsModule} from 'amexio-ng-extensions';
import {FormsModule} from '@angular/forms';
import { EmployeeRegistrationComponent } from './component/employee.registration.component';
import { ChartComponent } from './component/chart.component';
import { Routes, RouterModule } from '@angular/router';
import { TravelRequestComponent } from './component/travelrequest.component';

const routes : Routes = [{
  path : '', component : ChartComponent
},{
  path : 'emp', component : EmployeeRegistrationComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    ChartComponent,
    TravelRequestComponent
  ],
  entryComponents :[TravelRequestComponent],
  imports: [
    BrowserModule,
    AmexioWidgetModule,
    AmexioChartsModule,
    FormsModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
