import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f',{static:true}) signupForm: NgForm;
  defaultQuestion='teacher';
  answer='';
  genders=['male','female'];
  user={
    username:'',
    email:'',
    questionAnswer:'',
    answers:'',
    gender:''
  };
submitted=false;
  suggestUserName(){
    const suggestName='Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username: suggestName,
    //     email:''
    //   },
    //   secret: 'pet',
    //   questionAnswer:'',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData:{
        username:suggestName
      }
    })
  }
  // onSubmit(form: ElementRef){
  //   console.log(form);
  // }
  onSubmit(){
    this.submitted=true;
   this.user.username=this.signupForm.value.userData.username;
   this.user.email=this.signupForm.value.userData.email;
   this.user.questionAnswer=this.signupForm.value.userData.secret;
   this.user.answers=this.signupForm.value.questionAnswer;
   this.user.gender=this.signupForm.value.gender;
   this.signupForm.reset();
    
  }
}
