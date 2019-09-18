import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id={{departmentId}}</h3>
    <button class="btn btn-success"><a (click)="goPrivious()">Previous</a></button>
    <button class="btn btn-success"><a (click)="goNext()">Next</a></button>

    <div>
    <button (click)="gotoDepartment()">Back</button>
    </div>


  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
public departmentId;



  constructor(private routte: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id=parseInt(this.routte.snapshot.paramMap.get('id'));
    // this.departmentId=id;
    this.routte.paramMap.subscribe((params: ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.departmentId=id;
    });
  }
  goPrivious(){
    let priviousId=this.departmentId-1;
    this.router.navigate(['/department',priviousId])
  }
  goNext(){
    let nextId=this.departmentId+1;
    this.router.navigate(['/department',nextId])
  }
  gotoDepartment(){
    let selectedId=this.departmentId ? this.departmentId : null;
    this.router.navigate(['/department',{id:selectedId, test: 'testValue'}])
  }

}
