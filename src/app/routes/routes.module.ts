import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { CarUsedComponent } from './car-used/car-used.component';
import { WorkingDataComponent } from './working-data/working-data.component';
import { EmployeeComponent } from './employee/employee.component';

const COMPONENTS = [
  DashboardComponent,
  CarUsedComponent,
  WorkingDataComponent,
  LoginComponent,
  EmployeeComponent,
  RegisterComponent,
];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class RoutesModule {}
