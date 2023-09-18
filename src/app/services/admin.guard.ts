import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export  class AdminGuard implements CanActivate{
  //canActivate: [AdminGuard]
constructor(private login:LoginService,private router:Router){}

canActivate(route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
 // throw new Error('Method not implemented.');

  if(this.login.isLoggedIn() && this.login.getUserRole() == 'ADMIN' ){

    return true;
  }
  this.router.navigate(['login']);
  
  return false;
  }
}
