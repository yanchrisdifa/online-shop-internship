import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userNameForm: FormControl = new FormControl(null, Validators.required);
  passwordForm: FormControl = new FormControl(null, Validators.required);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.userNameForm.value == 'user' && this.passwordForm.value == '123') {
      this.router.navigate(['user']);
    } else if (
      this.userNameForm.value == 'admin' &&
      this.passwordForm.value == '123'
    ) {
      this.router.navigate(['admin']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: 'please input the correct username or password',
      });
    }
  }
}
