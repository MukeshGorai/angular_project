import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
public errorMsg;
  public employe=[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
   this._employeeService.getEmployees()
   .subscribe(data=>this.employe=data,
    error=>this.errorMsg=error
    );
  }

}
