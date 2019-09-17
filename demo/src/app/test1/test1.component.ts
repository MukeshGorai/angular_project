import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
public name= 'mukesh gorai';

public emp=[
  {"id": 1,"name":'mukesh',"age":23},
  {"id": 2,"name":'amit',"age":22},
  {"id": 3,"name":'vikas',"age":25},
  {"id": 4,"name":'pawan',"age":26},
  {"id": 5,"name":'bikram',"age":23},
]
  constructor() { }

  ngOnInit() {
  }

}
