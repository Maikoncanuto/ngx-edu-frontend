import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationService){
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if(err.status === 401 || err.status === 400 || err.status === 500){
        this.authenticationService.logout();
        location.reload(true);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
