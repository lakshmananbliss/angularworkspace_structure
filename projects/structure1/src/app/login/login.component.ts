import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data;
  
  constructor( private router: Router) { }

  ngOnInit() {
    this.data = {};
  }

  signIn() {
    this.router.navigate(['/home']);
  }

}
