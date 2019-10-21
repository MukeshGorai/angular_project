import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature='recipe';
  onNavigate(feature: string){
    this.loadedFeature=feature;
  }
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyA8Oz-X5DxLnXlvw2zUOgdGFoOPHhr-sqw",
      authDomain: "udemy-ng-http-eff04.firebaseapp.com"
    })
  }
}


// var firebaseConfig = {
//   apiKey: "AIzaSyA8Oz-X5DxLnXlvw2zUOgdGFoOPHhr-sqw",
//   authDomain: "udemy-ng-http-eff04.firebaseapp.com",
//   databaseURL: "https://udemy-ng-http-eff04.firebaseio.com",
//   projectId: "udemy-ng-http-eff04",
//   storageBucket: "udemy-ng-http-eff04.appspot.com",
//   messagingSenderId: "958902690649",
//   appId: "1:958902690649:web:5501b2d9e561f146656248",
//   measurementId: "G-SWYWD4CYZ9"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();