import { Injectable } from '@angular/core';
import { Observable, delay, of,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean=false;
  redirectUrl:string;

  constructor() { }

  logIn(name:string,password:string):Observable<boolean>{
    const isLoggedIn=(name=='tilpokemon' && password=='tilpokemon');

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn=>this.isLoggedIn=isLoggedIn)
    );
  }

  logOut(){
    this.isLoggedIn=false;
  }
}
