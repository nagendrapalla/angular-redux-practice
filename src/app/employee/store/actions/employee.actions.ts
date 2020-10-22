import { createAction, props } from '@ngrx/store';
import { EmployeeModel } from '../../models/employee.model';

export const loadEmployees = createAction('[Employee] Load Employees');

export const loadEmployeesSuccess = createAction('[Employee] Load Employees Success', props<{ data: EmployeeModel[] }>());

export const loadEmployeesFailure = createAction('[Employee] Load Employees Failure', props<{ error: any }>());

export const selectEmployee = createAction('[Employee] Select Employee', props<{ id: number }>());