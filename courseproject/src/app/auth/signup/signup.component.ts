import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  successMessage: string;
  errorMessage: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.authService.signupUser(email, password)
  //}
  // tryRegister(value){
  //   this.authService.doRegister(value)
    
  //   (res => {
  //     console.log(res);
  //     this.errorMessage = "";
  //     this.successMessage = "Your account has been created";
  //   }, err => {
  //     console.log(err);
  //     this.errorMessage = err.message;
  //     this.successMessage = "";
  //   })
  // }
  // doRegister(value){
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
  //     .then(res => {
  //       resolve(res);
  //     }, err => reject(err))
  //   })
  }
  
}
