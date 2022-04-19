import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userNameForm: FormControl = new FormControl(null, Validators.required);
  passwordForm: FormControl = new FormControl(null, Validators.required);

  constructor() {}

  ngOnInit(): void {
    console.log('kontol');
  }

  login() {
    console.log(this.userNameForm.value);
  }
}
