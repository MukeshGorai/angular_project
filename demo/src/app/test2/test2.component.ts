import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
name='mukesh';
password='***';
  constructor() { }

  ngOnInit() {
  }
  upDate(e){
    this.name=e.target.value
  }
  upDate1(e){
    this.password=e.target.value
  }

}
