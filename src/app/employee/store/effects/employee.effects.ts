import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadEmployees, loadEmployeesFailure, loadEmployeesSuccess } from '../actions/employee.actions';
import { map, switchMap } from 'rxjs/operators';
import { EmployeeService } from '../../service/employee.service';



@Injectable()
export class EmployeeEffects {

  constructor(private actions$: Actions, private service: EmployeeService) { }

  getAllEmployees$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadEmployees),
      switchMap(() => {
        return this.service.getAllEmployees().pipe(
          map(res => {
            return res['status'] ? loadEmployeesSuccess({ data: res['data'] }) : loadEmployeesFailure({ error: true })
          })
        )
      })
    )
  })

}
