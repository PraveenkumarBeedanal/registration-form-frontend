import {Component, OnChanges, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Registration} from './registration';
import {RegistrationService} from './registration.service';
import {Router} from '@angular/router';



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

  showSuccessMsg = false;
  public registration = new Registration();
  public meetUpName = 'CI/CD';

  constructor(private fb: FormBuilder,
              private registrationService: RegistrationService,
              private route: Router ) { }

  save() {
    this.fillRegistrationDetails();
    this.registrationService.createRegistration(this.registration)
      .subscribe(registration => {
        this.registration = registration;
        this.showSuccessMsg = true;
        this.registrationForm.reset();
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
