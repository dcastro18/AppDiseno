import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = '';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(userVal: string, passVal:string): void {
    this.user = userVal;
    this.password = passVal;
    console.log(this.user+' '+this.password);
  }

}
