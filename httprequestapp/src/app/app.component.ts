import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 servers=[
   {
     name:'Testserver',
     capacity:10,
     id:this.generatedId()
   },
   {
     name: 'Liveserver',
     capacity:100,
     id: this.generatedId()
   }
 ];
 onAddServer(name: string){
   this.servers.push({
     name: name,
     capacity: 50,
     id: this.generatedId()
   });
 }
 private generatedId(){
   return Math.round(Math.random()*10000);
 }
}
