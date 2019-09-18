import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElement=[{type:'server', name:'Testserver', content:'just a test!'}];
 
  onServerAdded(serverData:{serverName: string, serverContent: string}){
    this.serverElement.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
    onAddBlueprint(bluePrint:{serverName: string, serverContent: string}){
        this.serverElement.push({
          type: 'blueprint',
          name:bluePrint.serverName,
          content:bluePrint.serverContent
        });
    }

  
}
