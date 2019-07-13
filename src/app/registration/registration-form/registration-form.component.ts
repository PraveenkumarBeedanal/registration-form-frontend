import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm = this.fb.group({
    name: [null, Validators.required],
    password: [null, Validators.required],
    address: [null, Validators.required],
    email: [null, Validators.required],
    phoneNumber: [null]
  });

  public meetUpName = 'CI/CD';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
