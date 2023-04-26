import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormservService } from './formserv.service';

@Injectable({
  providedIn: 'root'
})
export class FormguardGuard implements CanActivate {
  constructor(private demo:FormservService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.demo.islogged();
  }

}
