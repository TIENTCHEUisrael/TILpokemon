import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //template:`<h1></h1>`
})
export class AppComponent implements OnInit{
  auth:AuthService;
  constructor(private router:Router,private authService:AuthService){}
  ngOnInit(): void {
    this.auth=this.authService;
  }
  logout(){
    this.auth.logOut();
    this.router.navigate(['/login']);
  }
}
 