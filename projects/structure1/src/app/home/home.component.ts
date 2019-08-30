import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, ) { }

  ngOnInit() {
  }

  settings() {
  }

  logout() {
    this.router.navigate(['']);
  }

  dash() {
    this.router.navigate(['/home/dashboard']);
  }
  usermanagement() {
    this.router.navigate(['/home/usermanagement']);
  }

}
