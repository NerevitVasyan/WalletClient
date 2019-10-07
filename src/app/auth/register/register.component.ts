import { Component, OnInit } from '@angular/core';
import { RegisterDto } from 'src/app/models/registerDto';
import { AuthService } from 'src/app/services/auth.service';
import * as _alertify from  "node_modules/alertifyjs/build/alertify.min.js";
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	user: RegisterDto;

	constructor(private authService: AuthService,
				private router: Router) { }

	ngOnInit() {
		this.user = new RegisterDto();
		this.user.username = "vasyan@gmail.com";
		this.user.email = "vasyan@gmail.com";
		this.user.password = "Qwe123!!";
		this.user.confirmPassword = "Qwe123!!";
		this.user.isAgree = true;
	}

	register() {
		console.log(this.authService);
		this.authService.register(this.user).subscribe(result => {
			if (result.successful) {
				_alertify.success(result.message);
				this.router.navigate(["/login"]);
			}
		}, error => {
			console.error(error);
		});

	}

}
