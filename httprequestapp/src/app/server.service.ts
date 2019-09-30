import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable()
export class ServerService{
    constructor(private http:HttpClient){}
    storeServers(servers: any[]){
        const headers=new HttpHeaders({'Content-Type':'application/json'});
        // return this.http.post('https://udemy-ng-http-eff04.firebaseio.com/data.json',
        // servers,
        // {headers: headers});
        return this.http.put('https://udemy-ng-http-eff04.firebaseio.com/data.json',
        servers,
        {headers: headers});
    }

    getServers(){
    return this.http.get('https://udemy-ng-http-eff04.firebaseio.com/data')
     map(
         async (response: Response)=>{
       
            const data1=response.json();
           for(let server of await data1){
               server.name='FETCHED_'+server.name;
           }
            return data1;
            }
        )
        // console.error();
        // (
        //     (error: Response)=>{
                
        //         return Observable.throw('somthing went wrong');
                
            
        //     }
            // );
        
      
    }
    getAppNAme(){
        return this.http.get('https://udemy-ng-http-eff04.firebaseio.com/appName.json');
        map(
            (response: Response)=>{
                return response.json();
            }
        )
    }
}