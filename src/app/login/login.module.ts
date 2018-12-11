import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {ThemeModule} from "../@theme/theme.module";
import {LoginRoutingModule} from "./login-routing.module";
import {AuthenticationModule} from "../authentication/authentication.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ThemeModule,
    LoginRoutingModule,
    AuthenticationModule
  ]
})
export class LoginModule { }
