import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit{
@Input('servelement') element: {type:string, name: string, content: string}
  constructor() {
    console.log('constructor call');
   }
ngOnChanges(change: SimpleChange){
console.log('ngOnChanges call');
console.log(change);
}
  ngOnInit() {
    console.log('ngOnInit call')
  }
  

}
