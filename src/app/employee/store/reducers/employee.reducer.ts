import { Action, createReducer, on } from '@ngrx/store';
import { loadEmployees, loadEmployeesFailure, loadEmployeesSuccess, selectEmployee } from '../actions/employee.actions';
import { EmployeeState, initialEmployeeState } from '../states/employee.state';


export const employeeFeatureKey = 'employee';

export const reducer = createReducer(
  initialEmployeeState,

  on(loadEmployees, (state: EmployeeState) => {
    return { ...state, loaded: false, loading: true };
  }),

  on(loadEmployeesSuccess, (state: EmployeeState, { data }) => {
    return { ...state, loaded: true, loading: false, profiles: data };
  }),

  on(loadEmployeesFailure, (state: EmployeeState, { error }) => {
    return { ...state, loaded: true, loading: false, error: true };
  }),

  on(selectEmployee, (state: EmployeeState, { id }) => {
    const employee = state.profiles.find(e => e.id == id);
    console.log(id, employee);

    return { ...state, selectedProfile: employee };
  })

);

export function employeeReducer(state, action) {
  return reducer(state, action);
}