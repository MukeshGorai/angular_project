import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  countries = ['India', 'USA', 'Germany', 'Italy', 'France'];
  contactForm: FormGroup;

  constructor() {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit() {
  }
  get mobile() {
    return this.contactForm.get('mobile');
  }
  
  get email() {
    return this.contactForm.get('email');
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
      country: new FormControl('', [Validators.required])
    });
}
}
