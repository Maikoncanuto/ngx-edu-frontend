import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModelsModule} from "../pages/models/models.module";
import {JwtInterceptor} from "./jwt.interceptor";
import {ErrorInterceptor} from "./error.interceptor";
import {AuthGuard} from "./auth.guard";

@NgModule({
  imports: [
    CommonModule,
    ModelsModule
  ],
  providers: [
    JwtInterceptor,
    ErrorInterceptor,
    AuthGuard
  ]
})
export class AuthenticationModule { }
