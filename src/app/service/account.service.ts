import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }

  loggendIn = false;

  login(user:User):boolean{
    if(user.userName == "sait" && user.password == "123456") {
      this.loggendIn = true;
      localStorage.setItem("isLogged",user.userName);
      return true;
    } 
    return false
  }

  isLoggedIn() {
    return this.loggendIn;
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggendIn = false
  }
}
