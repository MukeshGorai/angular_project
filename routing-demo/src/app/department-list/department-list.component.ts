import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <h3>Department List</h3>
  <ul >
  <li (click)="onSelect(department)" [class.selected]="iSelected(department)" *ngFor="let department of departments">
<button class="btn btn-success">{{department.id}}</button>-{{department.name}}
  </li>
  </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
public selectedId;
departments=[
  {"id":1,"name":"Angular"},
  {"id":2,"name":"Node"},
  {"id":3,"name":"MongoDB"},
  {"id":4,"name":"Ruby"},
  {"id":5,"name":"Bootstrap"}
]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.selectedId=id;
    });
  }
onSelect(department){
this.router.navigate(['/department',department.id])
}
iSelected(department){
  return department.id===this.selectedId;
}
}
