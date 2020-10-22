import { EmployeeModel } from '../../models/employee.model';

export interface EmployeeState {
    loading: boolean;
    loaded: boolean;
    profiles: EmployeeModel[];
    selectedProfile: EmployeeModel;
    error: boolean;
}

export const initialEmployeeState: EmployeeState = {
    loaded: false,
    loading: false,
    profiles: [],
    selectedProfile: null,
    error: false
};