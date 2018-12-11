import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${currentUser}`
        }
      });
    }

    return next.handle(req);
  }
}
