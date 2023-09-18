import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";


//const TOKEN_HEADER='Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{


    constructor(private  loginService:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
       // throw new Error("Method not implemented.");

        // add the jwt token (local storage ) request
let authReq=req;
        const token=this.loginService.getToken();

        console.log("inside Interceptor")
        if(token!=null){
authReq=authReq.clone({setHeaders:{Authorization: `Bearer ${token}`},

});
        }
            return next.handle(authReq);

        }
    }


// put it on app module ts file in provider 
export const  AuthInterceptorProviders=[
{
    provide :HTTP_INTERCEPTORS,

    useClass:AuthInterceptor,

    multi:true


}

]