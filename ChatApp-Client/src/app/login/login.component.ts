import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[ReactiveFormsModule,FormsModule]
})
export class LoginComponent implements OnInit {
  form:FormGroup
  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      userName:["",[Validators.minLength(4),Validators.maxLength(40),Validators.required]],
      password:["",[Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'),Validators.required]],
    });

   }

   get userName(){
    return this.form.controls["userName"]
   }
   get password(){
    return this.form.controls["password"]
   }

  ngOnInit() {
  }

  submit(){

  }

}
