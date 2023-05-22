import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  message:string='Vous etes déconnecté. (pikachu/pikachu)';
  name:string;
  password:string;
  auth:AuthService;
  constructor(private router:Router,private authService:AuthService){}

  ngOnInit(){
    this.auth=this.authService;
  }

  setMessage(){
    if(this.auth.isLoggedIn){
      this.message='Vous etes connecté.';
    }else{
      this.message='Identifiant ou mot de passe non valid.'
    }
  }

  login(){
    this.message='Tentative de connexion en cours....';
    this.auth.logIn(this.name,this.password).subscribe(
      (isloggedIn:boolean)=>{
        this.setMessage();
        if(isloggedIn){         
          this.router.navigate(['/pokemons']);
        }else{
          this.password='';
          this.router.navigate(['/login']);
        }
      }
    );
  }

  logout(){
      this.auth.logOut();
      this.message='Vous etes deconnecté';
  }
}
 