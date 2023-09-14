
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: string;
  public password: string;

  public loginPassword: boolean;

  constructor( public router: Router, private route: ActivatedRoute, ) { }

  logIn() {

    if(!this.password || !this.password) {
      this.loginPassword = true;
      return;
    }
    const psW = this.password;
    this.login = this.login.toLowerCase();
    if (this.login === 'admin' && psW === '1234') {
      this.loginPassword = false;
      localStorage.setItem('user', 'logined')
      this.router.navigate(['/tableItems'], {relativeTo: this.route});
    } else {
      this.loginPassword = true;
    }
  }

  // keyDownFunction(event) {
  //   if (event.keyCode === 13) {
  //     this.logIn();
  //   }
  // }

  ngOnInit() {
    console.log(localStorage.getItem("user"));
  }

}

