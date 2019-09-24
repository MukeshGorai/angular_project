import { Component, OnInit } from '@angular/core';
import { Observable,Observer} from 'rxjs';
import { interval } from 'rxjs';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // interval(1000)
    // .subscribe(
    //   (number: number)=>{
    //     console.log(number);
    //   }
    // );
    const myObservable=
    Observable.create(observer=>{
      setTimeout(()=>{
        observer.next('first package');
      },2000);
      setTimeout(()=>{
        observer.next('Second package');
      },4000);
      setTimeout(()=>{
        //observer.error('this does not work');
        observer.complete();
      },5000);
    });
    myObservable.subscribe(
      (data: string)=>{ console.log(data);},
      (error: string)=>{ console.log(error);},
      ()=>{console.log('complete');}
    );
  }

}
