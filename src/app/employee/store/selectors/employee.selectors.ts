import { createFeatureSelector, createSelector } from '@ngrx/store';
import { employeeFeatureKey } from '../reducers/employee.reducer';
import { EmployeeState } from '../states/employee.state';

export interface AppEmployeeState {
    employee: EmployeeState
}

export const getEmployeeState = createFeatureSelector<AppEmployeeState>(employeeFeatureKey);

export const getEmployeeData = createSelector(getEmployeeState, (state) => state.employee);

export const getAllEmployees = createSelector(getEmployeeData, (state) => state.profiles);