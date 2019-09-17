import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
   templateUrl: './test.component.html',
  
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public errorMsg;
public employees=[];
constructor(private _employeeService: EmployeeService){}
  ngOnInit() {
this._employeeService.getEmployees()
.subscribe(data=>this.employees=data,
        error=>this.errorMsg=error);
  }
  

}
