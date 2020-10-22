import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './containers/employee/employee.component';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/effects/employee.effects';
import { StoreModule } from '@ngrx/store';
import { employeeFeatureKey, employeeReducer } from './store/reducers/employee.reducer';


@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(employeeFeatureKey, { employee: employeeReducer }),
    EffectsModule.forFeature([EmployeeEffects])
  ]
})
export class EmployeeModule { }
