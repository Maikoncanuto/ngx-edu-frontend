import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AuthenticationService} from "../../authentication/authentication.service";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get campo(){return this.loginForm.controls;}

  onSubmit(){
    if(this.loginForm.invalid)
      return;

    this.authenticationService.login(this.campo.username.value, this.campo.password.value)
      .subscribe(response => {
        let token = response.headers.get('authorization');
        if(token){
          let tokenSub = token.substring(7);
          localStorage.setItem('currentUser', tokenSub);
          this.router.navigate(['/pages/dashboard']);
        }
      }, erro => {console.log("Erro autenticacao")})
  }
}
