import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { loadEmployees } from '../../store/actions/employee.actions';
import { getAllEmployees } from '../../store/selectors/employee.selectors';
import { EmployeeState } from '../../store/states/employee.state';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees$: Observable<EmployeeModel[]>;

  constructor(private store: Store<EmployeeState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());

    this.employees$ = this.store.select(getAllEmployees);
  }

}
