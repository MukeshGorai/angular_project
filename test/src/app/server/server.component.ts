import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent{

  serverid: number=10;
  servername: string="ofLine";
  constructor() { 
    this.servername=Math.random()>0.5? 'online':'Offline';
  }
  getServername(){
    return this.servername;
  }
getColor(){
  return this.servername === 'online' ? 'red' : 'blue' ;
}
}
