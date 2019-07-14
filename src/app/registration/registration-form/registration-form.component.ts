import {Component, OnChanges, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Registration} from './registration';
import {RegistrationService} from './registration.service';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  registrationForm = this.fb.group({
    name: [null, Validators.required],
    password: [null, Validators.required],
    address: [null, Validators.required],
    email: [null, Validators.required],
    phoneNumber: [null]
  });

  public registration = new Registration();
  public meetUpName = 'CI/CD';

  constructor(private fb: FormBuilder,
              private registrationService: RegistrationService) { }

  save() {
    this.fillRegistrationDetails();
    this.registrationService.createRegistration(this.registration)
      .subscribe(registration => {
        this.registration = registration;
      });
  }

  private fillRegistrationDetails() {
    this.registration.name = this.registrationForm.get('name').value;
    this.registration.password = this.registrationForm.get('password').value;
    this.registration.address = this.registrationForm.get('address').value;
    this.registration.email = this.registrationForm.get('email').value;
    this.registration.phoneNumber = this.registrationForm.get('phoneNumber').value;
  }
}
