import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdmin implements CanActivate {
  constructor( private _router: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem("user")) {
      return true;
    } else { 
      this._router.navigate(['/login']);
      return false;
    }
  }

}