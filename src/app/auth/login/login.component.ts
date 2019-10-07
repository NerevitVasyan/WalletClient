import { Component, OnInit } from '@angular/core';
import { LoginDto } from 'src/app/models/loginDto';
import { AuthService } from 'src/app/services/auth.service';
import * as _alertify from  "node_modules/alertifyjs/build/alertify.min.js";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoginDto;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.user = new LoginDto();
    this.user.email = "vasyan@gmail.com";
    this.user.password= "Qwe123!!";
    this.user.isRemember = true;
  }

  login() {
    this.authService.login(this.user).subscribe(result => {
      if(result.successful){
        console.log(result.data);
        _alertify.success(result.message);
        localStorage.setItem("userId",result.data);
        this.router.navigate([""]);
      }
    })
  }
}
