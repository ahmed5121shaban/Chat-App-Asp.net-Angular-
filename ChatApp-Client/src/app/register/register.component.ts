import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports:[ReactiveFormsModule,FormsModule],
})
export class RegisterComponent implements OnInit {
  form:FormGroup
  constructor(private formBuilder : FormBuilder) {
    this.form = this.formBuilder.group({
      userName:["",[Validators.minLength(4),Validators.maxLength(40),Validators.required]],
      email:["",[Validators.email,Validators.required]],
      password:["",[Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'),Validators.required]],
      confirmPassword:["",[Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'),Validators.required]]
    })
  }
  get userName(){
    return this.form.controls["userName"]
  }
  get email(){
    return this.form.controls["email"]
  }
  get password(){
    return this.form.controls["password"]
  }
  get confirmPassword(){
    return this.form.controls["confirmPassword"]
  }
  submit(){

  }

  ngOnInit() {
  }

}
