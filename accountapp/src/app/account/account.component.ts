import { Component, Input} from '@angular/core';
import { LoggingService } from '../logging.service';
import { from } from 'rxjs';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent{

@Input() account:{name: string, status: string};
@Input() id: number;


constructor(private loggingService: LoggingService,
            private accountService:  AccountService) { }
 onSetTo(status: string){
 this.accountService.updateStatus(this.id, status)
  //this.loggingService.logStatusChanger(status);
   this.accountService.statusUpdated.emit(status);
                }

  }
